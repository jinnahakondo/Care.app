import ExploreSearchBar from "@/components/services/ExploreSearchBar";
import ExploreFiltersSidebar from "@/components/services/ExploreFiltersSidebar";
import CaregiverCard from "@/components/services/CaregiverCard";
import ExplorePagination from "@/components/services/ExplorePagination";

const caregivers = [
  {
    id: "sarah-jenkins",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAOFN0SBq48rtt1qYZMiR83d6XLoXA2lnNbZI7nAOzXpfW0Sz1_oPMbyAKz2UcMjyf6ulvzN5mYDgz6eyZX4NqN8KnjkwEo0wjFe8Wn7GPrrHd9UTEQLGitTT44SKnVZ9xDTPjlhC9SH6d1SlQrCjXaPG-e7t-jGn5zfQs-HYLgkMbG9kJVpcNcSsHPr5cHEa3PiVgDPbWInM3LiA-bdNw5ovJBYDacMT4jnIs8-QfLqBa5MtwZ2Q4_9I2vcWWfojB2TMpDysE4luk",
    badgeLabel: "Baby Care",
    badgeColorClass: "text-[#2b8cee]",
    name: "Sarah Jenkins",
    subtitle: "Verified & Checked",
    rate: "$28",
    ratingValue: "4.9",
    ratingLabel: "(128 reviews)",
    description:
      "Over 8 years of experience in newborn and toddler care. Specialized in sensory play and early development.",
  },
  {
    id: "elena-rodriguez",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAPSuFbwj5Khe_iTWvnCP0gPEmYCrvwhRDPd_eZsz8IeSUcpJWj9bcq3b6DPJXBrlE2CM9PUigYfjCM6TSdIlv3Zksj9BX6QyUMGZcRfYzqWgzeOiEPOZdbr_4QeDaE69_5MAMIyq43UbaZ-zamriQobH5E3Txuskd5wHOCpt_rA3Lhk3eTJ9TUG-LDOSCk9qYIAYb72NCQFVRBJE7OT5CMEzxvhz7exE7YopdrxhXvAwwBhe3bOKVA0HFANkkA2lDVXP9Z7WzWkl4",
    badgeLabel: "Elderly Care",
    badgeColorClass: "text-emerald-600",
    name: "Dr. Elena Rodriguez",
    subtitle: "Medical Certified",
    rate: "$45",
    ratingValue: "5.0",
    ratingLabel: "(214 reviews)",
    description:
      "Specialist in geriatric care and palliative support with medical background. Certified nurse practitioner.",
  },
  {
    id: "michael-chen",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA_YbFzgnkoIB1U6_Y_cqRPfFdF2PNajzlfO74PQqxV5v-s6Kg6dWDwIMLqelYizg1QKEpVfQgj44j1IiGqdGYLqWi-KrglItBDkG1l6rfVVLb7158XBhVGScukgeLT369yUFEsxJOXd4EilPFzpTmZCOFpqt_nupd1FSm9tlhD_cS1jc4rNLF4GPFwYNUVb5iBk_HREH4yL0ESYjGZFF7wWmXsWoKY9hVIP29FfxXiGm-vXy-zD1m4H1TFBm6zn1LF2bixqIROkxs",
    badgeLabel: "Sick Care",
    badgeColorClass: "text-indigo-600",
    name: "Michael Chen",
    subtitle: "Verified Professional",
    rate: "$32",
    ratingValue: "4.8",
    ratingLabel: "(89 reviews)",
    description:
      "Compassionate post-surgery care specialist. Skilled in physical therapy assistance and medication management.",
  },
  {
    id: "jessica-moore",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBWgsO9x7SVzfjtbbPOvt3DJ9uMhMWqlMTyW6ngBJmglZqJu8_bhH0QD9fC2V331GbX829HtomO4q6V71mkJi4E58z65gHezRWIWhIrPLI09WH3qtD_sb3KJdaJDdeVHh5KBTxzYShgsT-9gXHw-zbePanxCJSurEYBfYxF1oRXowNP6jThC2OlAeJbtEWpfiNY5-13qZlLSn7I4x-6skxxwIVketrEnndN4Oa_r9z5NdWHZiOqhMVPra76m2bojfYatq3Atk_jXKg",
    badgeLabel: "Baby Care",
    badgeColorClass: "text-[#2b8cee]",
    name: "Jessica Moore",
    subtitle: "First Aid Certified",
    rate: "$25",
    ratingValue: "4.7",
    ratingLabel: "(56 reviews)",
    description:
      "Professional nanny with education degree. Expert in bilingual education and creative childhood activities.",
  },
  {
    id: "samuel-thompson",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDZ7b2lmKqEHT-qOpHUrFygOb3QDWtE40UzvvMe5s44gIbslvXO7nhesFZTPycpAwPSAXu54ZmwgECoHkWTSqWFCdt94qIrmNWlm0G0in6FK7zWsx35DIBF_qNn3_2e9POrY8PL1ms13b88HrS3oNbwLjohKMzvtV_Kf52e6OPThCzRuU0TGJGM4IMy4IM0tYkN5tnTSa_jyaOxtMmwPjvWcdQtmrz1zX0X7piooPMHf7r5WZRs0NsfoOZ8rlgNClTaEK0USgYEDaU",
    badgeLabel: "Elderly Care",
    badgeColorClass: "text-emerald-600",
    name: "Samuel Thompson",
    subtitle: "Dementia Trained",
    rate: "$38",
    ratingValue: "4.9",
    ratingLabel: "(167 reviews)",
    description:
      "Experienced in dementia and Alzheimer's specialized care. Dedicated to improving quality of life for seniors.",
  },
  {
    id: "maria-garcia",
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBugKsBJGqwstrPoiQw1k6RvO0Al99SONg9RT3V42csxv6fUPudLEOMV-ce-8CGsswc_qX3aGPItS0bT-a1d2clu7bbSVtbfb7TF__jwIe1aNafe0tvcaNMckm20v9Jegs5pCE5tv6-HeXwYs36jxXMsDDYlHGJfzcHzeE1uHf5u2Tidb6V_4wPee8lY_kwZLgUjqjmqRxkb9Gev4X9CZL-QuZhCkfnemRuEXrPjg4yHjg4co5ApYuH0xWwP1yRXNCmJTNQrwvCfNU",
    badgeLabel: "Sick Care",
    badgeColorClass: "text-indigo-600",
    name: "Maria Garcia",
    subtitle: "Licensed Nurse",
    rate: "$42",
    ratingValue: "4.9",
    ratingLabel: "(92 reviews)",
    description:
      "Bilingual registered nurse providing in-home medical support and recovery management for chronic illnesses.",
  },
];

export const metadata = {
  title: "Care.xyz - Explore Services",
};

export default function ServicesExplorePage() {
  return (
    <div className="bg-[#f6f7f8] text-slate-900">
      {/* Search hero */}
      <ExploreSearchBar />

      {/* Main content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Sidebar filters */}
          <ExploreFiltersSidebar />

          {/* Results */}
          <section className="grow">
            {/* Header */}
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <h1 className="text-2xl font-extrabold text-slate-900">
                  Caregivers in New York
                </h1>
                <p className="mt-1 text-sm text-slate-500">
                  124 professionals available near you
                </p>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <span className="text-slate-500">Sort by:</span>
                <select className="cursor-pointer border-none bg-transparent text-slate-900 font-semibold focus:ring-0">
                  <option>Recommended</option>
                  <option>Price: Low to High</option>
                  <option>Highest Rated</option>
                </select>
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {caregivers.map((caregiver) => (
                <CaregiverCard key={caregiver.id} {...caregiver} />
              ))}
            </div>

            {/* Pagination */}
            <ExplorePagination />
          </section>
        </div>
      </main>
    </div>
  );
}

