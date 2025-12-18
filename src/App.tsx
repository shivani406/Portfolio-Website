import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;



// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";

// // import your main UI sections here
// // example:
// // import Hero from "@/components/Hero";
// // import Projects from "@/components/Projects";
// // import Contact from "@/components/Contact";

// const App = () => (
//   <TooltipProvider>
//     <Toaster />
//     <Sonner />

//     {/* Single-page layout */}
//     {/* <Hero /> */}
//     {/* <TechStack /> */}
//     {/* <Projects /> */}
//     {/* <Achievements /> */}
//     {/* <Contact /> */}
//   </TooltipProvider>
// );

// export default App;
