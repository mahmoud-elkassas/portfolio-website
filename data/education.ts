export type EducationItem = {
  degree: string
  school: string
  period: string
}

export type CertificationItem = {
  name: string
  issuer: string
  date: string
  icon: string
}

export const education: EducationItem[] = [
  {
    degree: "B.Sc. in Computer Engineering",
    school: "Al-Azhar University, Cairo, Egypt",
    period: "Sep 2017 – Jun 2022 · Grade: Good",
  },
]

export const languages = [
  "Arabic (Native)",
  "English (Fluent)",
  "Spanish (Basic)",
  "Turkish (Basic)",
]

export const certifications: CertificationItem[] = [
  {
    name: "Meta Front-End Developer",
    issuer: "Coursera",
    date: "Jan 2023",
    icon: "trophy",
  },
  {
    name: "Frontend Engineering with React",
    issuer: "Manara",
    date: "Aug 2022",
    icon: "zap",
  },
]
