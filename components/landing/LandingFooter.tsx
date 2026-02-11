import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconExternalLink,
} from "@tabler/icons-react";
import { useLanguage } from "@/app/context/LanguageContext";
import { useAppTheme } from "@/app/context/ThemeContext";
import { useMemo } from "react";
import { memo } from "react";
import Image from "next/image";
import { Container, Grid, ActionIcon, Group, Text } from "@mantine/core";
import Link from "next/link";

const LandingFooter = () => {
  const { dict, isRTL } = useLanguage();
  const { theme } = useAppTheme();

  const companyLinks = useMemo(
    () => [
      { label: dict.footer.about, href: "/about" },
      { label: dict.footer.careers, href: "#" },
      { label: dict.footer.contact, href: "#" },
      { label: dict.footer.blog, href: "#" },
    ],
    [dict],
  );

  const serviceLinks = useMemo(
    () => [
      dict.footer.towing,
      dict.footer.tire_change,
      dict.footer.fuel_delivery,
      dict.footer.battery_jump,
      dict.footer.lockout,
    ],
    [dict],
  );

  const socialIcons = useMemo(
    () => [
      { icon: IconBrandGithub, href: "https://github.com", label: "GitHub" },
      {
        icon: IconBrandLinkedin,
        href: "https://linkedin.com",
        label: "LinkedIn",
      },
      { icon: IconMail, href: "mailto:contact@roadhelper.com", label: "Gmail" },
      {
        icon: IconExternalLink,
        href: "https://portfolio.com",
        label: "Portfolio",
      },
    ],
    [],
  );

  const isDark = theme === "dark";

  return (
    <footer
      className={`border-t ${isDark ? "border-white/5 bg-brand-black" : "border-black/5 bg-white"} pt-20 pb-10 relative overflow-hidden transition-colors duration-300`}
    >
      {/* Background Gradient */}
      <div
        className={`absolute bottom-0 left-0 w-[500px] h-[300px] ${isDark ? "bg-brand-yellow/5" : "bg-brand-yellow/10"} blur-[100px] rounded-full pointer-events-none`}
      />

      <Container size="xl">
        <Grid gutter={60} className={isRTL ? "text-right" : "text-left"}>
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative h-9 w-9 overflow-hidden rounded-lg shadow-lg shadow-brand-yellow/10 bg-white p-1">
                <Image
                  src="/assets/images/logo.png"
                  alt="Road Helper Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <Text
                className={`font-satoshi font-bold text-2xl tracking-tight ${isDark ? "text-white" : "text-black"}`}
              >
                Road Helper
              </Text>
            </Link>
            <Text
              className={`${isDark ? "text-gray-400" : "text-gray-600"} text-sm leading-relaxed mb-8 max-w-sm`}
            >
              {dict.common.preparing_dispatch}
            </Text>
            <Group gap="sm">
              {socialIcons.map((social, i) => (
                <ActionIcon
                  key={i}
                  component="a"
                  href={social.href}
                  target="_blank"
                  size="lg"
                  variant="default"
                  className={`${isDark ? "bg-white/5 border-white/5 text-gray-400 hover:text-white" : "bg-black/5 border-black/5 text-gray-600 hover:text-black"} hover:bg-brand-yellow hover:border-brand-yellow transition-colors duration-300`}
                >
                  <social.icon size={18} />
                </ActionIcon>
              ))}
            </Group>
          </Grid.Col>

          <Grid.Col span={{ base: 6, md: 2 }}>
            <Text
              className={`font-bold mb-6 font-satoshi ${isDark ? "text-white" : "text-black"}`}
            >
              {dict.footer.company}
            </Text>
            <div className="flex flex-col gap-4">
              {companyLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`${isDark ? "text-gray-400 hover:text-brand-yellow" : "text-gray-600 hover:text-brand-gold"} transition-colors text-sm font-medium`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </Grid.Col>
          <Grid.Col span={{ base: 6, md: 2 }}>
            <Text
              className={`font-bold mb-6 font-satoshi ${isDark ? "text-white" : "text-black"}`}
            >
              {dict.footer.services}
            </Text>
            <div className="flex flex-col gap-4">
              {serviceLinks.map((item) => (
                <Link
                  key={item}
                  href="#"
                  className={`${isDark ? "text-gray-400 hover:text-brand-yellow" : "text-gray-600 hover:text-brand-gold"} transition-colors text-sm font-medium`}
                >
                  {item}
                </Link>
              ))}
            </div>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Text
              className={`font-bold mb-6 font-satoshi ${isDark ? "text-white" : "text-black"}`}
            >
              {dict.footer.get_the_app}
            </Text>
            <Text
              className={`${isDark ? "text-gray-400" : "text-gray-600"} text-sm mb-4`}
            >
              {dict.footer.download_fast}
            </Text>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                className={`${isDark ? "bg-white/10 hover:bg-white/20 text-white" : "bg-black/10 hover:bg-black/20 text-black"} border border-white/5 px-4 py-2.5 rounded-xl flex items-center gap-3 transition-all w-fit cursor-pointer`}
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.21-1.96 1.07-3.11-1.08.05-2.37.72-3.15 1.71-.69.86-1.31 2.08-1.12 3.16 1.19.09 2.42-.84 3.2-1.76z" />
                </svg>
                <div className="text-left leading-none">
                  <div className="text-[10px] opacity-70">
                    {dict.footer.download_on}
                  </div>
                  <div className="text-sm font-semibold mt-0.5">
                    {dict.footer.app_store}
                  </div>
                </div>
              </button>
              <button
                className={`${isDark ? "bg-white/10 hover:bg-white/20 text-white" : "bg-black/10 hover:bg-black/20 text-black"} border border-white/5 px-4 py-2.5 rounded-xl flex items-center gap-3 transition-all w-fit cursor-pointer`}
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.84L14.5,12.81L16.81,15.12M20.3,10.84C20.53,10.96 20.69,11.21 20.69,11.5C20.69,11.79 20.53,12 20.3,12.16L18.29,13.62L15.31,12L18.29,10.38L20.3,10.84M16.81,8.88L14.5,11.19L6.05,2.16L16.81,8.88Z" />
                </svg>
                <div className="text-left leading-none">
                  <div className="text-[10px] opacity-70">
                    {dict.footer.get_it_on}
                  </div>
                  <div className="text-sm font-semibold mt-0.5">
                    {dict.footer.google_play}
                  </div>
                </div>
              </button>
            </div>
          </Grid.Col>
        </Grid>

        <div
          className={`border-t ${isDark ? "border-white/5" : "border-black/5"} mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4`}
        >
          <Text
            className={`${isDark ? "text-gray-500" : "text-gray-400"} text-sm font-medium`}
          >
            © {new Date().getFullYear()} Road Helper.{" "}
            {dict.footer.rights_reserved}
          </Text>
          <div className="flex gap-6">
            {[
              dict.footer.privacy_policy,
              dict.footer.terms_of_service,
              dict.footer.cookie_policy,
            ].map((policy) => (
              <Link
                key={policy}
                href="#"
                className={`${isDark ? "text-gray-500 hover:text-white" : "text-gray-400 hover:text-black"} text-sm transition-colors font-medium`}
              >
                {policy}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default memo(LandingFooter);
