"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { clientRoutes, helperRoutes } from "./routes";

export default function RouteGuard() {
  const router = useRouter();
  const pathname = usePathname();
  const { customer } = useSelector((state: RootState) => state.customer);
  const { helper } = useSelector((state: RootState) => state.helper);

  useEffect(() => {
    const currentUser = customer || helper;

    if (!currentUser) {
      // No user logged in, redirect to appropriate login
      if (pathname.startsWith("/client")) {
        router.replace("/client/login");
      } else {
        router.replace("/helper/login");
      }
      return;
    }

    const userRole = currentUser.role;

    // Check if user is trying to access routes they shouldn't
    if (
      userRole === "client" &&
      helperRoutes.some((route) => pathname.startsWith(route))
    ) {
      // Client trying to access helper routes
      router.replace("/client/dashboard");
    } else if (
      userRole === "helper" &&
      clientRoutes.some((route) => pathname.startsWith(route) && route !== "/")
    ) {
      // Helper trying to access client routes (except root which might be shared)
      router.replace("/helper/dashboard");
    }
  }, [pathname, customer, helper, router]);

  return null;
}
