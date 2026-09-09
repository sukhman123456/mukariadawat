import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/reservation")({
  beforeLoad: () => {
    throw redirect({ to: "/contact" });
  },
  component: () => null,
});
