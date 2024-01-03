import { Canvas } from "@react-three/fiber";
import MoonKnight from "./Components/MoonKnight";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";


function App() {
  return (
    <div className="h-fit w-full bg-black relative flex flex-col scroll-smooth bg-[url('/bg.webp')] bg-bottom	bg-no-repeat bg-cover	">
      <div className="w-full h-screen flex items-end justify-center fixed z-10">
        <div className="w-full h-full ">
          <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 5]}}>
            <spotLight position={[-5, 0, -1]} intensity={Math.PI * 10} color="white" />
            <spotLight position={[5, 0, -1]} intensity={Math.PI * 25} color="#FFFF00 " />
            <spotLight position={[0, -5, -1]} intensity={Math.PI * 5} color="white" />
            <hemisphereLight intensity={.25} />
            <ambientLight intensity={.25} />
            <MoonKnight />
          </Canvas>
        </div>
      </div>

      <motion.div className="w-full h-screen flex items-center justify-start flex-col gap-0"
        initial={{ opacity: 0, y: -500 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        <div className="flex">
          <p className="text-[6rem] md:text-[10rem] lg:text-[15rem] xl:text-[20rem] font-bold text-white leading-[0.9]">MOON</p>
          <p style={{ WebkitTextStroke: "white 2.5px" }} className="text-[6rem] md:text-[10rem] lg:text-[15rem] xl:text-[20rem] font-bold text-transparent leading-[0.9] absolute z-20">MOON</p>
        </div>
        <div className="flex">
          <p className="text-[6rem] md:text-[10rem] lg:text-[15rem] xl:text-[20rem] font-bold text-white leading-[0.9]">KNIGHT</p>
          <p style={{ WebkitTextStroke: "white 2.5px" }} className="text-[6rem]  md:text-[10rem] lg:text-[15rem] xl:text-[20rem] font-bold leading-[0.9] absolute z-20 text-transparent">KNIGHT</p>
        </div>
      </motion.div>


      <div className="w-full h-screen lg:p-48 md:p-24 p-12 overflow-x-hidden">
        <Parallax speed={5}>
          <motion.div className="w-full h-1/3 flex flex-col justify-center gap-4" initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -200 }
            }}
          >
            <h2 className="font-bold text-white text-7xl">Fist of Khonshu</h2>
            <p className="max-w-80 text-white">As the avatar of the Egyptian moon god, Moon Knight doles out brutal nighttime justice.</p>
          </motion.div>
        </Parallax>

        <Parallax speed={15}>
          <motion.div className="w-full h-1/3 flex flex-col justify-center items-end text-right gap-4" 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: 200 },
              exit: { opacity: 0, x: 200 }
            }}
          >
            <h2 className="font-bold text-white text-7xl">Crescent Darts</h2>
            <p className="max-w-80 text-white">He throws crescent-shaped darts and boomerangs reminiscent of the moon's shape.</p>
          </motion.div>
        </Parallax>

        <Parallax speed={20}>
          <motion.div className="w-full h-1/3 flex flex-col justify-center gap-4" initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -200 }
            }}
          >
            <h2 className="font-bold text-white text-7xl">White Cape</h2>
            <p className="max-w-80 text-white">Moon Knight stalks criminals from the shadows dressed in an all-white costume with a sweeping cloak.</p>
          </motion.div>
        </Parallax>
      </div>

      <div className="w-full h-screen ">
      <motion.div className="w-full h-full flex items-center flex-col" initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -200 }
            }}
          >
            <p className="font-bold text-white md:text-[10rem] text-7xl leading-[0.9] text-center mt-8">Watch Today</p>
            <p style={{ WebkitTextStroke: "white 2.5px" }} className="md:text-[10rem] text-7xl font-bold text-center absolute z-20 text-transparent leading-[0.9] mt-8">Watch Today</p>
          </motion.div>
      </div>
    </div>
  )
}

export default App
