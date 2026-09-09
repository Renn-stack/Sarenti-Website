/**
 * Higgsfield-generated editorial media.
 *
 * These URLs point at Higgsfield's generation CDN
 * (d8j0ntlcm91z4.cloudfront.net), allowed in next.config.mjs
 * `images.remotePatterns`. They work today, but for long-term
 * stability/performance you should download them and self-host under
 * /public/images/editorial and /public/media, then point these
 * constants at local paths instead (e.g. "/images/editorial/facial-01.jpg")
 * and remove the remotePatterns entry.
 *
 * See HIGGSFIELD-GENERATED-ASSETS.md for the exact download commands
 * and the prompts used to generate each asset.
 */
export const editorialImages = {
  facial01:
    "https://d8j0ntlcm91z4.cloudfront.net/user_3HfcZnXDgT8cqMcDdh49GhdJPHv/hf_20260909_120546_ed17abbc-9494-405a-82c1-25d5fe6e74e0.png",
  facial02:
    "https://d8j0ntlcm91z4.cloudfront.net/user_3HfcZnXDgT8cqMcDdh49GhdJPHv/hf_20260909_120546_72ecd933-7ccd-4f60-96d5-b9032cede8bf.png",
  facial03:
    "https://d8j0ntlcm91z4.cloudfront.net/user_3HfcZnXDgT8cqMcDdh49GhdJPHv/hf_20260909_120739_ed3daeab-d492-40a8-993e-dee9a939751d.png",
  body01:
    "https://d8j0ntlcm91z4.cloudfront.net/user_3HfcZnXDgT8cqMcDdh49GhdJPHv/hf_20260909_120547_b1b0c99b-59a3-45ff-92ea-5d7e276d2e79.png",
  body02:
    "https://d8j0ntlcm91z4.cloudfront.net/user_3HfcZnXDgT8cqMcDdh49GhdJPHv/hf_20260909_120546_26dba30b-c3c9-4aca-b31f-349225cdcf83.png",
  massage01:
    "https://d8j0ntlcm91z4.cloudfront.net/user_3HfcZnXDgT8cqMcDdh49GhdJPHv/hf_20260909_120547_bc53383c-6ad2-4991-962b-f9f40c27279f.png",
  massage02:
    "https://d8j0ntlcm91z4.cloudfront.net/user_3HfcZnXDgT8cqMcDdh49GhdJPHv/hf_20260909_120546_17c589e7-9569-4a67-b540-15b57e03b1e3.png",
} as const;

export const editorialVideos = {
  heroLoop:
    "https://d8j0ntlcm91z4.cloudfront.net/user_3HfcZnXDgT8cqMcDdh49GhdJPHv/hf_20260909_120551_d6372c85-4e54-4366-9aba-1a6a317f53fd.mp4",
  hyperbaricDetail:
    "https://d8j0ntlcm91z4.cloudfront.net/user_3HfcZnXDgT8cqMcDdh49GhdJPHv/hf_20260909_120708_280b7d52-2863-45c3-a694-cb3a4fdc61d5.mp4",
} as const;
