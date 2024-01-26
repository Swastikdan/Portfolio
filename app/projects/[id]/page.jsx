import AllProjectData from "@/components/projects/AllProjectData"
import { notFound } from 'next/navigation'
export async function generateStaticParams() {
  return AllProjectData.map((project) => ({
    params: {
      id: project.projecturl,
    },
    
  }))
}


export default function page({params}) {
  const {id}=params
  const Project = AllProjectData.filter((project) => project.projecturl === id)
  if (!Project.length) {
    return notFound()
  }
  return (
    <>
 <div class="mx-auto max-w-screen-xl px-5">
  <div class="mx-auto mt-14 max-w-3xl text-center">
    <span class="text-sm font-medium uppercase tracking-wider text-blue-400">Growth</span>
    <h1 class="mt-1 text-3xl font-bold lg:text-4xl lg:leading-tight lg:tracking-tight">Scaling Your SaaS: Strategies for Success</h1>
    <div class="mt-3 flex flex-wrap items-center justify-center gap-2 text-sm md:flex-nowrap">
      <span class="text-slate-400">Sarah Johnson</span><span class="text-slate-400">•</span><time class="text-slate-400" datetime="2023-01-15T09:15:00.000Z">Sun Jan 15 2023</time><span class="hidden text-slate-400 md:block">•</span>
      <div class="flex w-full flex-wrap justify-center gap-3 md:w-auto"><span class="text-sm text-slate-500">#scaling</span><span class="text-sm text-slate-500">#growth</span><span class="text-sm text-slate-500">#SaaS</span></div>
    </div>
  </div>
  <div class="mx-auto max-w-4xl">
    <picture
      ><source srcset="https://astroship-pro.web3templates.com/_astro/photo-1556761175-4b46a572b786_13j9uX.avif" type="image/avif" />
      <source srcset="/_astro/photo-1556761175-4b46a572b786_1bATaq.webp" type="image/webp" />
      <img src="/_astro/photo-1556761175-4b46a572b786_11GDbm.png" alt="Feature image" class="mt-6 h-full w-full rounded-xl object-contain" data-astro-transition-scope="astro-xmqcjxod-1" width="1280" height="800" loading="lazy" decoding="async"
    /></picture>
  </div>
  <div class="prose prose-headings:mb-2 prose-headings:mt-8 mx-auto mt-6 max-w-3xl">
    <p><strong>Whatever you do, it’s always beneficial to have the right tools at your disposal. I love working remotely and am a big advocate of doing remote software development.</strong></p>
    <p>Therefore, I always strive to have the best equipment available to be as productive as possible. Writing posts like this constantly takes a lot of time. Luckily iVanky helped me out and sponsored this post so that I can concentrate on writing. I recently had the chance to test out one of their hottest products, a dual USB-C Docking Station that allows me to connect both my wide-screen monitors to my MacBook with Dual 4K@60Hz display connectivity. It also supports up to 96W laptop charging, which is awesome. If you are in a situation like me and want to upgrade your equipment, check out this and their other products! And now comes the article:</p>
    <p>Whether you are new to programming or already an experienced developer. In this industry, learning new concepts and languages/frameworks is mandatory to keep up with the rapid changes. Take for example React - open-sourced by Facebook just a shy 4 years ago it already became the number one choice for JavaScript devs around the globe. But also Vue and Angular, of course, have their legitimate follower-base. And then there is Svelte, and universal frameworks like Next.js or Nuxt.js, and Gatsby, and Gridsome, and Quasar, and and and. If you want to shine as an expert JavaScript developer you should at least have some experience in different frameworks and libraries - besides doing your homework with good, old JS.</p>
    <p>To help you become successfull, I have collected 9 different projects, each with a distinct topic and a different JavaScript framework or library as a tech stack that you can build and add to your portfolio. Remember, nothing helps you more than actually building stuff so go ahead, sharpen your mind and make this happen!</p>
    <h2 id="dictum-integer-fusce-ac-ridiculus">Dictum integer fusce ac ridiculus</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit euismod rutrum, consequat fringilla ultricies nullam curae mollis semper conubia viverra, orci aenean dapibus pharetra nec tortor tellus cubilia. Ullamcorper mi lectus eu malesuada tempor massa praesent magna mattis posuere, lobortis vulputate ut duis magnis parturient habitant nibh id tristique.</p>
    <h3 id="mattis-malesuada-vestibulum-quis">Mattis malesuada vestibulum quis</h3>
    <p>Nam phasellus suscipit facilisis libero diam posuere, cursus massa vehicula neque imperdiet tincidunt dui egestas lacinia mollis aliquet orci, nisl curabitur dapibus litora dis cum nostra montes ligula praesent. Facilisi aliquam convallis molestie tempor blandit ultricies bibendum parturient cubilia quam, porttitor morbi torquent tempus taciti nec faucibus elementum phasellus, quis inceptos vestibulum gravida augue potenti eget nunc maecenas. Tempor facilisis ligula volutpat habitant consequat inceptos orci per potenti blandit platea, mus sapien eget vel libero vestibulum augue cubilia ut ultrices fringilla lectus, imperdiet pellentesque cum ridiculus convallis sollicitudin nisl interdum semper felis.</p>
    <h2 id="sodales-hendrerit-malesuada-et-vestibulum">Sodales hendrerit malesuada et vestibulum</h2>
    <ul>
      <li>
        <p>Luctus euismod pretium nisi et, est dui enim.</p>
      </li>
      <li>
        <p>Curae eget inceptos malesuada, fermentum class.</p>
      </li>
      <li>
        <p>Porttitor vestibulum aliquam porta feugiat velit, potenti eu placerat.</p>
      </li>
      <li>
        <p>Ligula lacus tempus ac porta, vel litora.</p>
      </li>
    </ul>
    <p>Orci volutpat augue viverra scelerisque dictumst ut condimentum vivamus, accumsan cum sem sollicitudin aliquet vehicula porta pretium placerat, malesuada euismod primis cubilia rutrum tempus parturient. Urna mauris in nibh morbi hendrerit vulputate condimentum, iaculis consequat porttitor dui dis euismod eros, arcu elementum venenatis varius lectus nisi. Nibh arcu ultrices semper morbi quam aptent quisque porta posuere iaculis, vestibulum cum vitae primis varius natoque conubia eu. Placerat sociis sagittis sociosqu morbi purus lobortis convallis</p>
  </div>
  <div class="mt-12 text-center"><a href="/blog" class="rounded-md bg-gray-100 px-5 py-3 transition hover:bg-gray-200">← Back to Blog</a></div>
</div>
    
    
    </>
  )
}

