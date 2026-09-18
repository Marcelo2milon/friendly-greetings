import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, Link, createRootRouteWithContext, useRouter, HeadContent, Scripts } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent(){return <div className="flex min-h-screen items-center justify-center bg-background px-4"><div className="max-w-md text-center"><h1 className="text-7xl font-bold">404</h1><h2 className="mt-4 text-xl font-semibold">Page not found</h2><p className="mt-2 text-sm">The page you're looking for doesn't exist or has been moved.</p><div className="mt-6"><Link to="/" className="inline-flex rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">Go home</Link></div></div></div>}
function ErrorComponent({error,reset}:{error:Error;reset:()=>void}){console.error(error);const router=useRouter();useEffect(()=>{reportLovableError(error,{boundary:"tanstack_root_error_component"})},[error]);return <div className="flex min-h-screen items-center justify-center px-4"><div className="max-w-md text-center"><h1 className="text-xl font-semibold">This page didn't load</h1><p className="mt-2 text-sm">Something went wrong. Try refreshing or head back home.</p><div className="mt-6 flex justify-center gap-2"><button onClick={()=>{router.invalidate();reset()}} className="rounded-md bg-primary px-4 py-2 text-sm">Try again</button><a href="/" className="rounded-md border px-4 py-2 text-sm">Go home</a></div></div></div>}

export const Route=createRootRouteWithContext<{queryClient:QueryClient}>()({
 head:()=>({meta:[
  {charSet:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},
  {title:"Neuro Kids | Brain Training for Children Aged 4–12"},
  {name:"description",content:"Neuro Kids is a playful brain-training programme for children aged 4–12, with fun exercises for memory, focus, logic, problem-solving and creativity."},
  {name:"robots",content:"index,follow"},{property:"og:title",content:"Neuro Kids | Brain Training for Growing Minds"},
  {property:"og:description",content:"Fun mental exercises for children aged 4–12. Play, think, explore and grow."},
  {property:"og:type",content:"website"},{property:"og:locale",content:"en_ZA"},
  {name:"twitter:card",content:"summary_large_image"}
 ],links:[{rel:"stylesheet",href:appCss},{rel:"icon",href:"/favicon.ico",type:"image/x-icon"}]}),
 shellComponent:RootShell,component:RootComponent,notFoundComponent:NotFoundComponent,errorComponent:ErrorComponent
});
function RootShell({children}:{children:ReactNode}){return <html lang="en-ZA"><head><HeadContent/></head><body>{children}<Scripts/></body></html>}
function RootComponent(){const {queryClient}=Route.useRouteContext();return <QueryClientProvider client={queryClient}><Outlet/></QueryClientProvider>}
