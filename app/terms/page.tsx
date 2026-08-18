import type { Metadata } from "next";
import { LegalDoc, LegalSection } from "@/components/vsl/LegalDoc";

export const metadata: Metadata = {
  title: "Terms of Use | Matilda Method",
  description:
    "Terms for using the Matilda Method website, booking a clarity call, and private 1:1 coaching.",
};

const UPDATED = "18 August 2026";

export default function TermsPage() {
  return (
    <LegalDoc title="Terms of use" updated={UPDATED}>
      <LegalSection title="These terms">
        <p>
          These terms cover this website, complimentary clarity calls, and
          private coaching with Matilda Martins-Ojo, trading as Matilda Method.
          By using the site, booking a call, or enrolling in coaching, you
          agree to them.
        </p>
        <p>
          Questions:{" "}
          <a href="mailto:hello@matildamethod.com">hello@matildamethod.com</a>.
        </p>
      </LegalSection>

      <LegalSection title="The website">
        <p>
          The site is for information. Stories and examples are personal
          experiences. They are not a promise of the same result for you.
        </p>
        <p>
          I may change or take down pages, offers, or availability without
          notice. I aim to keep the site working, but I do not guarantee it
          will be uninterrupted or error-free.
        </p>
      </LegalSection>

      <LegalSection title="Not clinical care">
        <p>
          Matilda Method is coaching. It is not psychotherapy, counselling,
          medical advice, or a substitute for NHS or other clinical mental
          health care. You remain responsible for your decisions, including
          whether to seek professional or medical support.
        </p>
        <p>
          If you are in crisis in the UK, contact emergency services or{" "}
          <a href="https://www.nhs.uk/nhs-services/mental-health-services/">
            NHS mental health services
          </a>
          . Coaching is not an emergency service.
        </p>
      </LegalSection>

      <LegalSection title="Clarity calls">
        <p>
          The 30-minute clarity call is complimentary. Its purpose is to
          understand what is going on for you, what you want to change, and
          whether six weeks of private coaching is a good fit for both of us.
          Either of us may decide it is not.
        </p>
        <p>
          Booking is through the calendar on this site. Please give reasonable
          notice if you need to reschedule. Repeated no-shows may mean I
          decline further bookings.
        </p>
      </LegalSection>

      <LegalSection title="Private coaching">
        <p>
          Private coaching is a 6-week 1:1 programme. What is included, the
          fee, and how we work together are confirmed in writing before you
          enrol. The current published investment is £1,497, with a payment
          plan available; the figure that applies is the one we agree at
          enrolment.
        </p>
        <p>
          Places are limited. A place is held once we have agreed terms and any
          required payment or first instalment has been received.
        </p>
        <p>
          You agree to show up, do the work between sessions, and tell me if
          something in the process is not working. I agree to bring the
          preparation, attention, and professional standards the work needs.
        </p>
      </LegalSection>

      <LegalSection title="Fees, cooling-off, and cancellation">
        <p>
          Fees are due as we agree (in full or by instalments). This website
          does not take card payments itself. Payment instructions are given
          when you enrol.
        </p>
        <p>
          If you buy coaching at a distance (online or by email), UK consumer
          law usually gives you 14 days to cancel a new contract. If you ask
          for sessions to start during that period, you may lose some or all of
          that right for work already provided. After the cooling-off period,
          fees are generally non-refundable because the place has been reserved
          for you, except where the law requires otherwise or I choose to make
          an exception.
        </p>
        <p>
          Please give at least 48 hours’ notice to reschedule a session. Late
          cancellations and no-shows may count as a used session. If I have to
          move a session, I will offer a new time.
        </p>
        <p>
          If I cannot complete the programme for a reason on my side, I will
          refund a fair portion of fees for unused sessions.
        </p>
      </LegalSection>

      <LegalSection title="Confidentiality">
        <p>
          What we discuss stays between us, with the usual limits: I may share
          information if the law requires it, or if I reasonably believe there
          is a serious risk of harm to you or someone else. I am a registered
          nurse with a safeguarding background, and I take those duties
          seriously.
        </p>
      </LegalSection>

      <LegalSection title="Your use of the site">
        <p>
          Do not misuse the site, attempt to break it, scrape it aggressively,
          or use it in a way that is unlawful or harmful. Content on these
          pages (copy, design, video, and images I own) belongs to Matilda
          Method unless stated otherwise. You may not copy it for your own
          commercial use without permission.
        </p>
        <p>
          Names and marks of other organisations, including Positive
          Intelligence® and the NeuroLeadership Institute, belong to their
          owners.
        </p>
      </LegalSection>

      <LegalSection title="Liability">
        <p>
          Nothing in these terms limits liability for death or personal injury
          caused by negligence, fraud, or anything else that cannot be limited
          under English law.
        </p>
        <p>
          Beyond that, I am not liable for loss that was not reasonably
          foreseeable, or for results you hoped coaching would produce. Coaching
          is a partnership; outcomes vary.
        </p>
      </LegalSection>

      <LegalSection title="Law">
        <p>
          These terms are governed by the law of England and Wales. UK
          consumers keep the mandatory rights that apply where they live.
        </p>
        <p>
          If a court finds one part unenforceable, the rest still applies. I
          may update these terms; the version on this page is the current one.
        </p>
        <p>
          Related:{" "}
          <a href="/privacy">Privacy policy</a>.
        </p>
      </LegalSection>
    </LegalDoc>
  );
}
