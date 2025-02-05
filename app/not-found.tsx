import { redirect } from "next/navigation";

/**
 * NotFound component that redirects to the home page.
 *
 * @returns {void} Redirects to the home page.
 */
const NotFound = () => {
  return redirect("/");
};

export default NotFound;
