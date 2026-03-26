"use client"

import * as React from "react"
import Link from "next/link"

import { useIsMobile } from "@/hooks/use-mobile"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export const healthServices = [
  {
    title: "Vitamin B12 Injections",
    href: "/Services/vitamin-b12",
    description: "Essential vitamin injections for energy.",
  },
  {
    title: "Ear Infections",
    href: "/Services/ear-infections",
    description: "Expert assessment and treatment.",
  },
  {
    title: "Skin Conditions",
    href: "/Services/skin-conditions",
    description: "Eczema, acne, and psoriasis treatment.",
  },
  {
    title: "Migraine Treatment",
    href: "/Services/migraine-treatment",
    description: "Fast private consultations and treatment options.",
  },
]

export const vaccinationServices = [
  {
    title: "Travel Vaccinations",
    href: "/Travel-Clinic/travel-vaccination",
    description: "Complete travel health protection.",
  },
  {
    title: "Flu Vaccination",
    href: "/Services/flu-vaccination",
    description: "Protect yourself from seasonal flu.",
  },
  {
    title: "HPV Vaccination",
    href: "/Vaccines/hpv-vaccination",
    description: "Protection against HPV-related cancers.",
  },
  {
    title: "Shingles Vaccine",
    href: "/Vaccines/shingles-vaccine",
    description: "Prevent shingles and complications.",
  },
  {
    title: "Chickenpox Vaccine",
    href: "/Vaccines/chickenpox-vaccine",
    description: "Protection for children and adults.",
  },
  {
    title: "Meningitis ACWY",
    href: "/Vaccines/meningitis-acwy-vaccine",
    description: "Required for travel and Hajj/Umrah.",
  },
  {
    title: "Meningitis B",
    href: "/Vaccines/meningitis-b-vaccine",
    description: "Private meningitis B vaccination service.",
  },
  {
    title: "COVID Vaccination",
    href: "/Travel-Clinic/private-covid-vaccination-service",
    description: "Private COVID-19 vaccination service.",
  },
]

export const consultationServices = [
  {
    title: "Weight Loss Services",
    href: "/weight-loss-service",
    description: "Injectable weight loss programmes.",
  },
  {
    title: "Erectile Dysfunction",
    href: "/Services/erectile-dysfunction",
    description: "Discreet consultations and treatments.",
  },
  {
    title: "Antimalarials",
    href: "/Travel-Clinic/antimalarials-sidcup",
    description: "Travel medication for malaria prevention.",
  },
  {
    title: "Travel Medication Supply",
    href: "/Services/travel-medication",
    description: "Medication support for travel health needs.",
  },
]

export function PharmacyNavigation() {
  const isMobile = useIsMobile()

  return (
    <NavigationMenu>
      <NavigationMenuList className="flex-wrap">
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Health Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-6 p-6 md:w-[600px] lg:w-[800px] lg:grid-cols-3">
              {healthServices.map((service) => (
                <ListItem
                  key={service.title}
                  title={service.title}
                  href={service.href}
                >
                  {service.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Vaccinations</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-6 p-6 md:w-[600px] lg:w-[800px] lg:grid-cols-3">
              {vaccinationServices.map((service) => (
                <ListItem
                  key={service.title}
                  title={service.title}
                  href={service.href}
                >
                  {service.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Consultations</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-6 p-6 md:w-[600px] lg:w-[800px] lg:grid-cols-3">
              {consultationServices.map((service) => (
                <ListItem
                  key={service.title}
                  title={service.title}
                  href={service.href}
                >
                  {service.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/Travel-Clinic/travel-vaccination">Travel Clinic</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/Services/services">About</Link>
          </NavigationMenuLink>
        </NavigationMenuItem> */}

        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/Services/contact-us">Contact</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href} className="block p-3 rounded-md hover:bg-accent transition-colors">
          <div className="text-sm font-medium leading-none mb-2">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
