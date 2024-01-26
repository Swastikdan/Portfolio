"use client";
import Link from "next/link";
import Image from "next/image";
import { Eye, Github } from "lucide-react";

import ProjectPageCardTrigger from "./ProjectPageCardTrigger";
export default function ProjectPageCard({ AllProjectData }) {
  return (
    <>
  <section class="mt-16">
    <ul class="mx-auto grid max-w-4xl gap-16">
      <ProjectPageCardTrigger />
      </ul>
    </section>

    </>
  );
}
