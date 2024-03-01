"use client";

import { ReactNode } from "react";
import { CartProvider as USCProvider } from "use-shopping-cart";

export default function CartProvider({ children }: { children: ReactNode }) {
  return (
    <USCProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY as string}
      successUrl="http://keepsmiling24.com/stripe/success"
      cancelUrl="http://keepsmiling24.com/stripe/error"
      currency="GBP"
      billingAddressCollection={false}
      shouldPersist={true}
      language="en-GB"
    >
      {children}
    </USCProvider>
  );
}
