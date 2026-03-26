'use client';

import { services } from '@/lib/services';
import { useState, useMemo, useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { FaSearch } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function BookingForm() {
  const searchParams = useSearchParams();
  const [selectedService, setSelectedService] = useState<string>('');
  const [serviceSearch, setServiceSearch] = useState('');
  const [showServiceDropdown, setShowServiceDropdown] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedDateObj, setSelectedDateObj] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [preferredContact, setPreferredContact] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [phoneError, setPhoneError] = useState<string>('');
  const [dateError, setDateError] = useState<string>('');

  const contactMethods = ['Email', 'Phone', 'Either'];
  
  // Generate time slots (9 AM to 5 PM, every 30 minutes)
  const timeSlots = useMemo(() => {
    const slots: string[] = [];
    for (let hour = 9; hour < 17; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        const displayTime = `${hour}:${minute.toString().padStart(2, '0')} ${hour >= 12 ? 'PM' : 'AM'}`;
        slots.push(timeString);
      }
    }
    return slots;
  }, []);

  // Get minimum date (today)
  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  // Check if a date is Sunday (Sunday = 0)
  const isSunday = (date: Date): boolean => {
    const dayOfWeek = date.getDay();
    return dayOfWeek === 0; // Sunday
  };

  // Filter Sundays from date picker (allow Monday to Saturday)
  const filterSundays = (date: Date): boolean => {
    return !isSunday(date);
  };

  // Handle date change from DatePicker
  const handleDateChange = (date: Date | null) => {
    if (date) {
      const dateString = date.toISOString().split('T')[0];
      setSelectedDateObj(date);
      setSelectedDate(dateString);
      setDateError('');
    } else {
      setSelectedDateObj(null);
      setSelectedDate('');
    }
  };

  // Pre-select service from query parameter
  useEffect(() => {
    const serviceId = searchParams.get('service');
    if (serviceId) {
      const service = services.find(s => s.id === serviceId);
      if (service) {
        setSelectedService(service.id);
        setServiceSearch(service.title);
      }
    }
  }, [searchParams]);

  // Filter services based on search
  const filteredServices = useMemo(() => {
    if (!serviceSearch) return services;
    const searchLower = serviceSearch.toLowerCase();
    return services.filter(service =>
      service.title.toLowerCase().includes(searchLower) ||
      service.description.toLowerCase().includes(searchLower)
    );
  }, [serviceSearch]);

  const selectedServiceData = services.find(s => s.id === selectedService);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowServiceDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const formatTimeForDisplay = (time: string): string => {
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour > 12 ? hour - 12 : (hour === 0 ? 12 : hour);
    return `${displayHour}:${minutes} ${ampm}`;
  };

  const formatPhoneNumber = (value: string): string => {
    // Remove all non-digit characters except +
    let digits = value.replace(/[^\d+]/g, '');
    
    // Remove existing +44 if present
    if (digits.startsWith('+44')) {
      digits = digits.slice(3);
    } else if (digits.startsWith('44')) {
      digits = digits.slice(2);
    }
    
    // Remove leading 0 if present (UK numbers start with 0, but +44 format doesn't include it)
    if (digits.startsWith('0')) {
      digits = digits.slice(1);
    }
    
    // Add +44 prefix
    return digits ? `+44${digits}` : '+44';
  };

  const validatePhoneNumber = (phone: string): boolean => {
    // Remove all non-digit characters
    const digits = phone.replace(/\D/g, '');
    
    // Must have at least +44 and some digits
    if (digits.length < 3) {
      return false;
    }
    
    // Extract UK digits (remove country code 44 if present)
    let ukDigits = digits;
    if (digits.startsWith('44')) {
      ukDigits = digits.slice(2);
    }
    
    // UK phone numbers after +44 are 10 digits (without leading 0)
    // Mobile: +44 7xxx xxxxxx (10 digits starting with 7)
    // Landline: +44 1xxx xxxxxx, +44 2x xxxx xxxx (10 digits starting with 1 or 2)
    if (ukDigits.length !== 10) {
      return false;
    }
    
    // Valid UK prefixes after +44: 1, 2, 3, 7, 8, 9
    const validFirstDigits = ['1', '2', '3', '7', '8', '9'];
    return validFirstDigits.includes(ukDigits[0]);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const formatted = formatPhoneNumber(value);
    
    setFormData({ ...formData, phone: formatted });
    
    // Validate if user has entered something beyond just +44
    if (formatted.length > 3) {
      const isValid = validatePhoneNumber(formatted);
      if (isValid) {
        setPhoneError(''); // Clear error when valid
      } else {
        // Only show error if user has entered enough digits to potentially be complete
        const digits = formatted.replace(/\D/g, '');
        const ukDigits = digits.startsWith('44') ? digits.slice(2) : digits;
        if (ukDigits.length >= 10) {
          setPhoneError('Please enter a valid phone number');
        } else {
          setPhoneError(''); // Don't show error while still typing
        }
      }
    } else {
      setPhoneError(''); // Clear error if field is empty or just +44
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate phone number before submission
    if (formData.phone && !validatePhoneNumber(formData.phone)) {
      setPhoneError('Please enter a valid phone number');
      return;
    }
    
    // Validate date and time are selected
    if (!selectedDate || !selectedTime) {
      alert('Please select both a date and time for your appointment.');
      return;
    }
    
    // Double-check that selected date is not a Sunday
    if (selectedDateObj && isSunday(selectedDateObj)) {
      setDateError('We are closed on Sundays. Please select a date from Monday to Saturday.');
      return;
    }
    
    // Handle form submission here
    console.log({
      service: selectedServiceData,
      appointmentDate: selectedDate,
      appointmentTime: selectedTime,
      preferredContact,
      ...formData,
    });
    // You can add API call here to submit the booking request
    alert('Booking request submitted! We will contact you soon.');
  };

  return (
    <div className="bg-white rounded-xl border  p-8 md:p-12">
      <h2 className="text-2xl md:text-3xl font-display font-bold text-primary mb-6">
        Booking Request Form
      </h2>
      <p className="text-[#617589] mb-8">
        Please provide the following information so we can assist you with your booking.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Service Selection */}
        <div>
          <label className="block text-sm font-semibold text-[#111418] mb-2">
            Service to Book <span className="text-red-500">*</span>
          </label>
          <div className="relative" ref={dropdownRef}>
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search and select a service..."
                value={serviceSearch}
                onChange={(e) => {
                  setServiceSearch(e.target.value);
                  setShowServiceDropdown(true);
                }}
                onFocus={() => setShowServiceDropdown(true)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg bg-[#f4f7f6] focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>
            {showServiceDropdown && filteredServices.length > 0 && (
              <div className="absolute z-10 w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                {filteredServices.map((service) => (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => {
                      setSelectedService(service.id);
                      setServiceSearch(service.title);
                      setShowServiceDropdown(false);
                    }}
                    className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
                  >
                    <div className="font-medium text-[#111418]">{service.title}</div>
                  </button>
                ))}
              </div>
            )}
          </div>
          {selectedServiceData && (
            <div className="mt-3 p-3 bg-primary/10 rounded-lg border border-primary/20">
              <p className="text-sm text-primary">
                <span className="font-medium">Selected:</span> {selectedServiceData.title}
              </p>
            </div>
          )}
        </div>

        {/* Appointment Date */}
        <div>
          <label className="block text-sm font-semibold text-[#111418] mb-2">
            Preferred Appointment Date <span className="text-red-500">*</span>
          </label>
          <p className="text-sm text-[#617589] mb-3">
            Select your preferred date for the appointment (Monday-Saturday only)
          </p>
          <DatePicker
            selected={selectedDateObj}
            onChange={handleDateChange}
            filterDate={filterSundays}
            minDate={new Date()}
            dateFormat="dd/MM/yyyy"
            placeholderText="Select a date (Monday-Saturday)"
            className={`w-full px-4 py-3 border rounded-lg bg-[#f4f7f6] focus:ring-2 focus:ring-primary focus:outline-none ${
              dateError ? 'border-red-500' : 'border-gray-300'
            }`}
            required
            wrapperClassName="w-full"
          />
          {dateError && (
            <p className="mt-2 text-sm text-red-500">{dateError}</p>
          )}
        </div>

        {/* Appointment Time */}
        <div>
          <label className="block text-sm font-semibold text-[#111418] mb-2">
            Preferred Appointment Time <span className="text-red-500">*</span>
          </label>
          <p className="text-sm text-[#617589] mb-3">
            Select your preferred time for the appointment
          </p>
          <select
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-[#f4f7f6] focus:ring-2 focus:ring-primary focus:outline-none"
            required
          >
            <option value="">Select a time</option>
            {timeSlots.map((time) => (
              <option key={time} value={time}>
                {formatTimeForDisplay(time)}
              </option>
            ))}
          </select>
        </div>

    

        {/* Name */}
        <div>
          <label className="block text-sm font-semibold text-[#111418] mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-[#f4f7f6] focus:ring-2 focus:ring-primary focus:outline-none"
            required
          />
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-[#111418] mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-[#f4f7f6] focus:ring-2 focus:ring-primary focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-[#111418] mb-2">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={handlePhoneChange}
              placeholder="+44 7xxx xxxxxx"
              className={`w-full px-4 py-3 border rounded-lg bg-[#f4f7f6] focus:ring-2 focus:ring-primary focus:outline-none ${
                phoneError ? 'border-red-500' : 'border-gray-300'
              }`}
              required
            />
            {phoneError && (
              <p className="mt-1 text-sm text-red-500">{phoneError}</p>
            )}
            
          </div>
        </div>

        {/* Additional Message */}
        <div>
            <label className="block text-sm font-semibold text-[#111418] mb-2">
            Additional Message or Special Requirements
          </label>
          <textarea
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={5}
            placeholder="Please provide any additional information, special requirements, or questions you may have..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-[#f4f7f6] focus:ring-2 focus:ring-primary focus:outline-none"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full md:w-auto px-8 py-4 rounded-full bg-primary text-white font-semibold hover:bg-primary/90 transition-colors text-base"
          >
            Submit Booking Request
          </button>
        </div>
      </form>
    </div>
  );
}

