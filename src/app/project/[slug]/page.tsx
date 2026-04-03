import { projectItems } from "@/app/Data/data";
import ProjectDetailClient from "./ProjectDetailClient";

export async function generateMetadata(
    { params }: { params: { slug: string } }
) {
  const project = projectItems.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.name} | Portfolio`,
    description: project.description,
    openGraph: {
      title: project.name,
      description: project.description,
      images: [project.image],
    },
    twitter: {
      card: "summary_large_image",
      title: project.name,
      images: [project.image],
    },
  };
}

export default function Page() {
  return <ProjectDetailClient />;
}