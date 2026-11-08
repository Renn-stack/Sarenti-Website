/**
 * Patient testimonials.
 *
 * ONLY add real reviews from real patients who have AUTHORIZED their use
 * on the website (e.g. copied verbatim from Google reviews, with
 * permission). Never write, paraphrase or invent testimonials.
 * While this list is empty the section links to Google reviews instead.
 */
export interface Testimonial {
  /** Verbatim quote. */
  quote: string;
  /** Name or initials as authorized by the patient, e.g. "María G." */
  author: string;
  /** Where the review was originally published, e.g. "Google". */
  source?: string;
}

export const testimonials: Testimonial[] = [];
