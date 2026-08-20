import type { Metadata } from "next";
import { LegalDoc, LegalSection } from "@/components/vsl/LegalDoc";

export const metadata: Metadata = {
  title: "Privacy Policy | Matilda Method",
  description:
    "How Matilda Method collects, uses, and looks after personal information for the website, clarity calls, and private coaching.",
};

const UPDATED = "20 August 2026";

export default function PrivacyPage() {
  return (
    <LegalDoc title="Privacy policy" updated={UPDATED}>
      <LegalSection title="Who this is for">
        <p>
          Matilda Method is the coaching practice of Matilda Martins-Ojo. This
          policy explains how personal information is handled when you use this
          website, book a clarity call, join private coaching, or write to{" "}
          <a href="mailto:hello@matildamethod.com">hello@matildamethod.com</a>.
        </p>
        <p>
          I am the data controller for information collected through this
          practice. If you have a question about your data, email that address.
        </p>
      </LegalSection>

      <LegalSection title="What I collect">
        <p>Depending on how you get in touch, I may hold:</p>
        <ul>
          <li>
            Name, email address, and any other details you enter when you book a
            call or write to me
          </li>
          <li>
            Scheduling information, such as the time you choose and any notes
            you add to a booking
          </li>
          <li>
            What we discuss on a clarity call or in coaching, including notes I
            take to do the work properly
          </li>
          <li>
            Payment details if you enrol. Card numbers are taken by Stripe, not
            stored on this website. If you choose Klarna or Affirm, they collect
            what they need to decide on finance.
          </li>
          <li>
            Technical information that our hosting provider may log, such as IP
            address, browser type, and pages requested
          </li>
        </ul>
        <p>
          I do not ask for health records. Coaching is not clinical care. If you
          choose to share something sensitive, I treat it as confidential unless
          the law or a serious safeguarding concern requires otherwise.
        </p>
      </LegalSection>

      <LegalSection title="Why I use it">
        <p>I use personal information to:</p>
        <ul>
          <li>Run this website and keep it secure</li>
          <li>Book and hold clarity calls</li>
          <li>Decide together whether coaching is a good fit</li>
          <li>Deliver private coaching and keep session notes</li>
          <li>Take payment, send invoices, and keep accounting records</li>
          <li>Reply to messages and handle complaints</li>
          <li>Meet legal duties, including tax and safeguarding</li>
        </ul>
        <p>
          Under UK GDPR, that is usually a contract with you, a legitimate
          interest in running the practice, or a legal obligation. Where consent
          is needed, I will ask for it and you can withdraw it.
        </p>
      </LegalSection>

      <LegalSection title="Booking and other tools">
        <p>
          Clarity calls are booked through Cal.com. When you choose a time, Cal
          processes the details you submit under{" "}
          <a href="https://cal.com/privacy" rel="noopener noreferrer">
            Cal.com’s privacy policy
          </a>
          .
        </p>
        <p>
          If you subscribe to writing on Substack, that is handled by Substack
          under{" "}
          <a href="https://substack.com/privacy" rel="noopener noreferrer">
            Substack’s privacy policy
          </a>
          . Unsubscribing is done through Substack, not through this site.
        </p>
        <p>
          Private coaching payments are processed by Stripe under{" "}
          <a href="https://stripe.com/privacy" rel="noopener noreferrer">
            Stripe’s privacy policy
          </a>
          . If you choose to pay over time, Klarna or Affirm (whichever you
          select at checkout) will also process your information under their own
          terms, including a credit check where they require one.
        </p>
        <p>
          The site is hosted by a professional web host. They process limited
          technical data so the pages can load and stay available.
        </p>
      </LegalSection>

      <LegalSection title="Cookies">
        <p>
          This site itself does not set marketing or analytics cookies. The
          calendar embed and hosting provider may set cookies that are needed
          for the page or booking tool to work. Your browser controls let you
          block cookies; some features, including booking, may then fail.
        </p>
      </LegalSection>

      <LegalSection title="Sharing">
        <p>
          I do not sell personal information. I share it only when needed to run
          the practice, for example:
        </p>
        <ul>
          <li>Cal.com, for scheduling</li>
          <li>
            Stripe, for checkout. Klarna or Affirm, if you choose to pay through
            them
          </li>
          <li>Email, hosting, and accounting tools</li>
          <li>Professional advisers, such as an accountant, under confidence</li>
          <li>
            A person or authority the law requires, or where I reasonably
            believe there is a serious risk of harm
          </li>
        </ul>
        <p>
          I am a registered nurse with safeguarding experience. If I believe
          you or someone else is at serious risk, I may share what is needed
          with the right services, even if that means breaking usual coaching
          confidentiality.
        </p>
      </LegalSection>

      <LegalSection title="How long I keep it">
        <p>
          Booking and enquiry details are kept for as long as needed to arrange
          the call and follow up, then deleted unless we begin coaching or you
          ask me to stay in touch.
        </p>
        <p>
          Coaching notes and contracts are kept for the work and for a
          reasonable period afterwards (typically up to six years) in case of
          questions, complaints, or legal claims. Accounting records are kept
          for the period UK tax rules require.
        </p>
      </LegalSection>

      <LegalSection title="Where it is stored">
        <p>
          Some tools I use may store data outside the UK. Where that happens, I
          rely on providers who offer an appropriate safeguard, such as the UK
          Extension to the EU-US Data Privacy Framework or standard contractual
          clauses.
        </p>
      </LegalSection>

      <LegalSection title="Your rights">
        <p>
          Under UK data protection law you can ask to see the information I hold
          about you, correct it, delete it, restrict how it is used, object to
          certain uses, or receive a copy in a portable form. You can also
          complain to the{" "}
          <a href="https://ico.org.uk/" rel="noopener noreferrer">
            Information Commissioner’s Office
          </a>
          .
        </p>
        <p>
          Email{" "}
          <a href="mailto:hello@matildamethod.com">hello@matildamethod.com</a>{" "}
          and I will respond as the law requires. I may need to confirm it is
          you before I change or release anything.
        </p>
      </LegalSection>

      <LegalSection title="Children">
        <p>
          This website and the coaching are for adults. I do not knowingly
          collect information from anyone under 18.
        </p>
      </LegalSection>

      <LegalSection title="Changes">
        <p>
          If this policy changes in a way that matters, I will update this page
          and the date above. The current version is the one on this site.
        </p>
        <p>
          Related:{" "}
          <a href="/terms">Terms of use</a>.
        </p>
      </LegalSection>
    </LegalDoc>
  );
}
