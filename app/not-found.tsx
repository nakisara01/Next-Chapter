import Navigation from "../components/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Not found"
};

export default function NotFound() {
  return (
    <div>
      <h1>Not found!</h1>
    </div>
  );
}
