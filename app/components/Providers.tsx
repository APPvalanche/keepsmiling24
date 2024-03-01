"use client";

import { ReactNode } from "react";
import { CartProvider as USCProvider } from "use-shopping-cart";

export default function CartProvider({ children }: { children: ReactNode }) {
  return (
    <USCProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
      successUrl="https://keepsmiling24.vercel.app/stripe/success"
      cancelUrl="https://keepsmiling24.vercel.app/stripe/error"
      currency="GBP"
      billingAddressCollection={false}
      shouldPersist={true}
      language="en-GB"
    >
      {children}
    </USCProvider>
  );
}
