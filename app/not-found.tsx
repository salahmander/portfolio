import { redirect } from "next/navigation";

/**
 * NotFoundPage component that redirects to the home page.
 *
 * @returns {void} Redirects to the home page.
 */
const NotFoundPage = () => {
  return redirect("/");
};

export default NotFoundPage;
