import emailjs from "@emailjs/browser";

emailjs.init({
  publicKey: process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY,
  blockHeadless: true,
  limitRate: {
    id: "app",
    throttle: 10000, // 1 request per 10s
  },
});

export default emailjs;
