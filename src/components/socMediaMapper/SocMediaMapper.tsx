// Icons
import { FaXTwitter, FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa6";
// Style
const containerStyle = 'd-flex flex-row justify-content-evenly my-3 socMediaCtr';
// Types
import { Member_T } from "./MembersType";
// Animation
import { motion } from 'framer-motion'
import { staggerFadeIn } from "../../pages/variants";

const SocMediaMapper = ({ member }: { member: Member_T }) => (
  <motion.div
    className={containerStyle}
    variants={staggerFadeIn.container}
    initial="hidden"
    animate="show"
    viewport={{ once: true }}

  >
    {Object.entries(member.socialMedia).map(([social, link]) => (
      <a
        key={social}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {social === 'fb' &&
          <motion.div
            variants={staggerFadeIn.item}
            viewport={{ once: true }}
          >
            <FaFacebook />
          </motion.div>
        }
        {social === 'tiktok' &&
          <motion.div
            variants={staggerFadeIn.item}
            viewport={{ once: true }}
          >
            <FaTiktok />
          </motion.div>
        }
        {social === 'twitter' &&
          <motion.div
            variants={staggerFadeIn.item}
            viewport={{ once: true }}
          >
            <FaXTwitter />
          </motion.div>
        }
        {social === 'instagram' &&
          <motion.div
            variants={staggerFadeIn.item}
            viewport={{ once: true }}
          >
            <FaInstagram />
          </motion.div>
        }
      </a>
    ))}
  </motion.div>
)
export default SocMediaMapper