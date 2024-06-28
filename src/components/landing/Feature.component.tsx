import Image from "next/image";
import picture from "@/public/image/gettyimages.jpg";

const topFeatures = [
  {
    name: "Personalised Solution.",
    description:
      "They enhance the user experience and improve the quality of care by tailoring services based on personal health data, preferences, and behaviors.",
  },
  {
    name: "Chat with Doctors.",
    description:
      "A robust chat system in telemedicine apps facilitates seamless communication between patients and healthcare providers.",
  },
  {
    name: "Video Meeting.",
    description:
      "High-quality, real-time video and audio for virtual consultations. Secure and encrypted communication to protect patient privacy.",
  },
];

const bottomFeatures = [
  {
    name: "Remote Monitoring.",
    description:
      "Continuous monitoring of chronic conditions through connected devices. Alerts and notifications for healthcare providers in case of abnormal readings.",
  },
  {
    name: "Integration with H.I.S.",
    description:
      "Seamless integration with hospital management systems and other healthcare platforms. Seamless integration with hospital management systems and other healthcare platforms.",
  },
  {
    name: "Multi-language Support.",
    description:
      "Language options to cater to a diverse user base. Real-time translation services for consultations.",
  },
  {
    name: "Analytics and Reporting.",
    description:
      "Tools for analyzing patient data and generating reports. Dashboards for tracking health metrics and outcomes.",
  },
];

export default function Features() {
  return (
    <>
      <div className="overflow-hidden bg-[#0A0A0A] text-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-[#cb1a41]">
                  Tele FUNICULAR
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  The Best Features.
                </p>
                <p className="mt-6 text-lg leading-8 text-white">
                  Tele Funicular provides user friendly solutions to all the
                  pataients in need with excilent healthcare services.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-white lg:max-w-none">
                  {topFeatures.map((feature) => (
                    <div key={feature.name} className="relative">
                      <dt className="inline font-semibold text-white">
                        {feature.name}
                      </dt>{" "}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <Image
              src={picture}
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
      <div className="bg-[#0A0A0A] text-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-[#cb1a41]">
              Tele FUNICULAR
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Some the advanced features of this Application.
            </p>
            <p className="mt-6 text-lg leading-8 text-white">
              Advanced Features in telemedicine apps are designed to cater to
              the unique needs of individual patients to make them comfortable.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {bottomFeatures.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-white">
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-white">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}
