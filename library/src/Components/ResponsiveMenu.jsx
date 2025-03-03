
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";

const ResponsiveMenu = ({ open, setOpen, setAbout, setMyBooks }) => {
    const [resourcesOpen, setResourcesOpen] = useState(false);
    const [otherInfoOpen, setOtherInfoOpen] = useState(false);

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "0%" }}
                    exit={{ x: "-100%" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="fixed top-0 left-0 w-72 h-screen bg-white shadow-lg border-r z-50 p-4"
                >
                
                    <button className="absolute top-4 right-4 text-xl" onClick={() => setOpen(false)}>
                        <AiOutlineClose />
                    </button>
                    <ul className="space-y-4 text-lg">
                        <li 
                            className="hover:text-primary cursor-pointer"
                            onClick={() => { setAbout(false); setMyBooks(false); setOpen(false); }}
                        >
                            Home
                        </li>
                        <li 
                            className="hover:text-primary cursor-pointer"
                            onClick={() => { setAbout(false); setMyBooks(true); setOpen(false); }}
                        >
                            My Books
                        </li>
                        <li 
                            className="hover:text-primary cursor-pointer"
                            onClick={() => { setAbout(true); setMyBooks(false); setOpen(false); }}
                        >
                            About
                        </li>
                        {/* <li className="hover:text-primary cursor-pointer">Search</li>
                        <li className="hover:text-primary cursor-pointer">Research Support</li> */}

                        {/* Resources Section */}
                        <li>
                            <div 
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() => setResourcesOpen(!resourcesOpen)}
                            >
                                Resources <AiOutlinePlus className={`text-sm transform ${resourcesOpen ? "rotate-45" : ""}`} />
                            </div>
                            {resourcesOpen && (
                                <ul className="ml-4 mt-2 space-y-2 text-sm">
                                    <li className="hover:text-primary cursor-pointer">E-Gateway</li>
                                    <li className="hover:text-primary cursor-pointer">E-Books</li>
                                    <li className="hover:text-primary cursor-pointer">Institutional Repository</li>
                                    <li className="hover:text-primary cursor-pointer">CAT Question Papers</li>
                                    <li className="hover:text-primary cursor-pointer">Online Learning</li>
                                    <li className="hover:text-primary cursor-pointer">Indian Journals</li>
                                    <li className="hover:text-primary cursor-pointer">E-NEWSPAPERS</li>
                                </ul>
                            )}
                        </li>

                        {/* <li className="hover:text-primary cursor-pointer">Remote Access</li> */}

                        
                        <li>
                            <div 
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() => setOtherInfoOpen(!otherInfoOpen)}
                            >
                                Other Info <AiOutlinePlus className={`text-sm transform ${otherInfoOpen ? "rotate-45" : ""}`} />
                            </div>
                            {otherInfoOpen && (
                                <ul className="ml-4 mt-2 space-y-2 text-sm">
                                    <li className="hover:text-primary cursor-pointer">Tutorial</li>
                                    <li className="hover:text-primary cursor-pointer">Gallery</li>
                                    <li className="hover:text-primary cursor-pointer">Contact</li>
                                </ul>
                            )}
                        </li>
                    </ul>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ResponsiveMenu;
