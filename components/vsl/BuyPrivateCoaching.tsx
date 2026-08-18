"use client";

import { useFormStatus } from "react-dom";
import type { ReactNode } from "react";
import {
  startPrivateCoachingCheckout,
  type CheckoutPlan,
} from "@/app/actions/checkout";

function SubmitLabel({
  children,
  idleClassName,
}: {
  children: ReactNode;
  idleClassName: string;
}) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className={`${idleClassName} disabled:cursor-wait disabled:opacity-70`}
    >
      {pending ? "Redirecting to Stripe…" : children}
    </button>
  );
}

export function BuyPrivateCoaching({
  plan,
  children,
  className = "",
}: {
  plan: CheckoutPlan;
  children: ReactNode;
  className?: string;
}) {
  return (
    <form
      action={startPrivateCoachingCheckout.bind(null, plan)}
      className="w-full"
    >
      <SubmitLabel idleClassName={className}>{children}</SubmitLabel>
    </form>
  );
}
