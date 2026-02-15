import {
  MdCheckCircle,
  MdReceipt,
} from "react-icons/md";

const activities = [
  {
    type: "caregiver",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCpxFZA-U7o6XTx3Je515w6Zy3gzpcNPjc-T8pE_XZZj2IGvKmykFqToyiAeXfQPWCIahHhV3RLaUPdvrZovibNEGBG4Zo76RN0eYe6hfQHtdwU9CU8AxRdlpKzEvMcehfuTCGsknfAwtnNBXHF7lbfT4QSCW8E28pCdCIUXpDZ-4mDSx_iJ31M9CcgQkmuF_BuVYnYfktQydto_H6q78qxQu6iuEu0Rhj5XNonZtE6EugpPOEtC0O0UnF7WSBvjKWbQNcLUBTMe_0",
    title: "Nurse Emma Wilson checked in for Elderly Care",
    subtitle: '"Arrived and started morning routine with Mrs. Jenkins."',
    time: "10 mins ago",
    hasOnline: true,
  },
  {
    type: "system",
    icon: MdCheckCircle,
    title: "Booking Confirmed for Child Care",
    subtitle: "Saturday, Oct 24th with caregiver David L.",
    time: "2 hours ago",
  },
  {
    type: "caregiver",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDRecLlfEhduhCdWoYcPY3nDL9WAFtyYnygJEnaxWeqcLTnHFpDFS39EVr0cgSpwpllwjRUDgViznetLE23YPW1B479OkPTNcQ9PszWG8VEqFGR5-1PD5MZNmlGMeKucSvd7ayaPaxjVQEkzX-BWVis4NX-8wPKoI0iRxHNrU1GYHfI59s1lLbAaovaQB9acDB5WJHPjwfVLHSoAHXmL9nKWqllZhNeRCJquJ7RAuXmDHkdSaU6OHqVymKM20OoYeuXXpx0EfQqp0g",
    title: "Sophia Martinez sent you a message",
    subtitle: '"Hello Sarah, I\'ve updated the dietary requirements for..."',
    time: "Yesterday",
  },
  {
    type: "system",
    icon: MdReceipt,
    title: "Invoice Paid #INV-8829",
    subtitle: "Transaction of $320.00 was successful.",
    time: "Yesterday",
  },
];

export default function ActivityFeed() {
  return (
    <div className="flex h-[500px] flex-col rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-center justify-between border-b border-slate-200 p-6 dark:border-slate-800">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white">
          Recent Activity
        </h2>
        <button className="text-sm font-medium text-[#308ce8] hover:underline">
          View All
        </button>
      </div>
      <div className="custom-scrollbar flex-1 overflow-y-auto p-6">
        <div className="space-y-6">
          {activities.map((activity, index) => {
            const IconComponent = activity.icon;
            return (
              <div key={index} className="flex gap-4">
                {activity.type === "caregiver" ? (
                  <div className="relative">
                    <img
                      alt="Caregiver"
                      src={activity.image}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    {activity.hasOnline && (
                      <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-white bg-[#10b981] dark:border-slate-900" />
                    )}
                  </div>
                ) : (
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 dark:bg-slate-800">
                    {IconComponent && (
                      <IconComponent className="text-xl text-[#308cee]" />
                    )}
                  </div>
                )}
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <p className="text-sm text-slate-900 dark:text-white">
                    <span className="font-bold">{activity.title.split(" ")[0]}</span>{" "}
                    {activity.title.split(" ").slice(1).join(" ")}
                  </p>
                  <span className="text-xs text-slate-400">{activity.time}</span>
                </div>
                <p className="mt-1 text-xs italic text-slate-500">
                  {activity.subtitle}
                </p>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
