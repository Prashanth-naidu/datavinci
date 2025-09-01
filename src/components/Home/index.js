import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faRotateRight, faPlus, faMinus, faAngleRight, faAngleLeft, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { Modal, Box, Typography, Button, Divider, Chip, Stack } from "@mui/material";
import Nav from '../Nav'
import Samples from '../Samples'
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () =>{

    const [isModalOpen, setIsModalOpen] = useState(false)

    const openHandle = () => setIsModalOpen(true)
    const handleClose = () => setIsModalOpen(false)

    
    return(
    <div className='bg_container'>
        <Nav />
        <div className='identify_resolution'>
            <Samples />
            <div>
                <p className='heading'>Manuka Honey UMF™ 24+ MGO 1122+</p>
                <p className='note' onClick={openHandle}><img src="https://i.ibb.co/MkLY6WfZ/SVG.png" alt="SVG"/>What is UMF and MGO?</p>

                <Modal open={isModalOpen} onClose={handleClose}>
                <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 300,
                    bgcolor: "#fff",
                    borderRadius: 3,
                    boxShadow: 24,
                    p: 4,
                    maxHeight: "80vh",
                    overflowY: "auto",
                }}
                >
                {/* Title */}
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                    What is UMF and MGO?
                </Typography>

                {/* UMF Section */}
                <Typography variant="body1" sx={{ fontWeight: "bold", mt: 2 }}>
                    UMF
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    UMF is the strength and purity rating of Manuka honey.
                </Typography>
                <Stack direction="row" spacing={1} mt={1}>
                    {["15+", "20+", "24+", "26+", "28+", "30+"].map((item, index) => (
                    <Chip
                        key={index}
                        label={item}
                        sx={{ textDecoration: "underline", textDecorationColor: ["#FF4D4F","#FF7A45","#FFD666","#5CDBD3","#40A9FF","#9254DE"][index], color: ["#FF4D4F","#FF7A45","#FFD666","#5CDBD3","#40A9FF","#9254DE"][index] }}
                    />
                    ))}
                </Stack>

                {/* Divider */}
                <Divider sx={{ my: 2 }} />

                {/* MGO Section */}
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    MGO
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    MGO is the key natural compound that gives Manuka honey its antibacterial strength.
                </Typography>
                <Stack direction="row" spacing={1} mt={1}>
                    {["263+", "514+", "829+", "1122+", "1450+", "1620+"].map((item, index) => (
                    <Chip
                        key={index}
                        label={item}
                        sx={{ textDecoration: "underline", textDecorationColor: ["#FFA940","#FF7875","#95DE64","#1890FF","#722ED1","#13C2C2"][index], color: ["#FFA940","#FF7875","#95DE64","#1890FF","#722ED1","#13C2C2"][index] }}
                    />
                    ))}
                </Stack>

                {/* Close Button */}
                <Button
                    variant="outlined"
                    fullWidth
                    onClick={handleClose}
                    sx={{ mt: 4 }}
                >
                    Close
                </Button>
                </Box>
            </Modal>
                <div>
                    <div className='name_container'> 
                        <p>The Optimiser</p>
                        <div className='reviews'>
                            <div>
                                <FontAwesomeIcon icon={faHeart} style={{ color: '#D1C000' }} />
                                <FontAwesomeIcon icon={faHeart} style={{ color: '#D1C000' }} />
                                <FontAwesomeIcon icon={faHeart} style={{ color: '#D1C000' }} />
                                <FontAwesomeIcon icon={faHeart} style={{ color: '#D1C000' }} />
                                <FontAwesomeIcon icon={faHeart} style={{ color: '#D1C000' }} />
                            </div>
                            <p>825 reviews</p>
                        </div>
                    </div>
                    <p>For those times in life when quality comes first. This pure UMF™ 24+ Manuka
                            Honey is powerfully active, sourced from wild and rugged locations around
                            Aotearoa New Zealand and great for almost all uses. It has a full, delicious
                            flavour and your body will love you for it.
                    </p>
                    <div className='trade_img_container'>
                        <img src="https://i.ibb.co/bRQK3dG4/2c2fd2a45d55be2cd951d8759843038f01211cd5.png" alt="2c2fd2a45d55be2cd951d8759843038f01211cd5" className='trade-imgs' />
                        <img src="https://i.ibb.co/nsr3cfRH/8c97517d9ebbd3a76cb0f638e2c795fd65e3a277.png" alt="8c97517d9ebbd3a76cb0f638e2c795fd65e3a277" className='trade-imgs' />
                        <img src="https://i.ibb.co/nsySWZjZ/091bee2154df16d16ed70217774440bf225f2900.png" alt="091bee2154df16d16ed70217774440bf225f2900" className='trade-imgs' />
                        <img src="https://i.ibb.co/4RbmxFyG/783e7711502694fd9e1b70bbd66f02804411f849.png" alt="783e7711502694fd9e1b70bbd66f02804411f849" className='trade-imgs' />
                        <img src="https://i.ibb.co/bRBJF45t/4988d44823061da38da9b65e1479dcdbc959917d.png" alt="4988d44823061da38da9b65e1479dcdbc959917d" className='trade-imgs' />
                        <img src="https://i.ibb.co/8DCgDZJ5/b70a6f585ec0a964285e98003337d6ec3752867c.png" alt="b70a6f585ec0a964285e98003337d6ec3752867c" className='trade-imgs' />
                    </div>
                    <div>
                        <p>SIZE (SELECT ONE)</p>
                        <p>Variant: 125g | 4.4oz</p>
                    </div>
                </div>
                <div>
                    <div className='sample_img_container'>
                        <img src="https://i.ibb.co/XZf62qJm/7de1f09601655c832d5893519fdcced0e555d0c4.png" alt="7de1f09601655c832d5893519fdcced0e555d0c4" className='sample-imgs' />
                        <img src="https://i.ibb.co/Q383MSxK/8d93649b099c59282802fa91e97511eef4488f59.png" alt="8d93649b099c59282802fa91e97511eef4488f59" className='sample-imgs' />
                        <img src="https://i.ibb.co/xS8dSsKv/9e1262aea547565b6267d2ade6938b34433af5bb.png" alt="9e1262aea547565b6267d2ade6938b34433af5bb" className='sample-imgs' />
                        <img src="https://i.ibb.co/yBSyXBnM/58c66a54fbac705a9aec08ed66696b0281f25e4a.png" alt="58c66a54fbac705a9aec08ed66696b0281f25e4a" className='sample-imgs' />
                        <img src="https://i.ibb.co/YBYTvvY1/200507dc6ca527981f47be16abbf956084e04dbd.png" alt="200507dc6ca527981f47be16abbf956084e04dbd" className='sample-imgs'/>
                        <img src="https://i.ibb.co/kgwg4gts/d07b7562a11ef9ede254e5ffddc9a19e57a99608.png" alt="d07b7562a11ef9ede254e5ffddc9a19e57a99608" className='sample-imgs' />
                        <img src="https://i.ibb.co/0yDHhwjp/f429565081532e5175a5f130ddd6ae84d203fb8c.png" alt="f429565081532e5175a5f130ddd6ae84d203fb8c" className='sample-imgs' />
                    </div>
                </div>
                <p>PAYMENT OPTIONS (SELECT ONE)</p>
                <div className='purchase_deals_container'>
                    <div className='purchase_deals_one'>
                        <p>One-time purchase $55.88 USD</p>
                    </div>
                    <div className='purchase_deals_two'>
                        <p>Subscribe & save 20% $44.70 USD</p>
                    </div>
                </div>
                <p><FontAwesomeIcon icon={faRotateRight} /> What is a Subscription?</p>
                <p>SELECT QUANTITY</p>
                <div className='purchase_deals_container'>
                    <div className='quantity_btn'>
                        <button style={{ backgroundColor:"transparent", border:"0px"}}><FontAwesomeIcon icon={faMinus} /></button>
                        <p>1</p>
                        <button style={{ backgroundColor:"transparent", border:"0px"}}><FontAwesomeIcon icon={faPlus} /></button>
                    </div>
                    <div className='add_btn'>
                        Add to Cart
                    </div>
                </div>
                <div>
                    <p><FontAwesomeIcon icon={faAngleLeft} /> Beauty Bundle <FontAwesomeIcon icon={faAngleRight} /></p>
                    <div className='beauty_bundle'>
                        <div className='bundle_item'>
                            <img src="https://i.ibb.co/XZf62qJm/7de1f09601655c832d5893519fdcced0e555d0c4.png" className='beauty-bundle-imgs' />
                            <p>UMF 20+</p>
                            <select>
                                <option>250mg</option>
                                <option>500mg</option>
                            </select>
                        </div>
                        <FontAwesomeIcon icon={faPlus} />
                        <div className='bundle_item'>
                            <img src="https://i.ibb.co/Q383MSxK/8d93649b099c59282802fa91e97511eef4488f59.png" className='beauty-bundle-imgs' />
                            <p>UMF 24+</p>
                            <select>
                                <option>250mg</option>
                                <option>500mg</option>
                            </select>
                        </div>
                        <FontAwesomeIcon icon={faPlus} />
                        <div className='bundle_item'>
                            <img src="https://i.ibb.co/htb0C0k/999979079a923079d63d37a1077ca3eeb88fd930.png" className='beauty-bundle-imgs'/>
                            <p>Wooden Spoon</p>
                        </div>
                        <div className='bundle_add_container'>
                            <p> <span style={{ textDecoration : "line-through"}}>$478.75 USD</span> <span style={{ fontWeight : "bold"}}>$430.88 USD</span> <span style={{ color : "green"}}> Save 10%</span></p>
                            <div className='bundle_add_btn'>
                                Add Bundle to Cart
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <p><img src="https://i.ibb.co/0VJJbvx3/a4ae2eaca1629c3adae1c7714b22764214572002.png" alt="a4ae2eaca1629c3adae1c7714b22764214572002" className='color-img'/> Colourclub members earn up to <span style={{ borderRadius: "20px", color: "#F39C12"}}>56</span> reward points when buy this item. Sign up or log in</p>
                    <div>
                        <div>
                            <p>Delivery</p>
                            <p>FREE DELIVERY ON ORDERS OVER $30</p>
                        </div>
                        <div>
                            <p>ESTIMATED DELIVERY DATE: Jun 9 - Jun 13</p>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <p>After Pay</p>
                        <p>or 4 interest-free payments of $13.97 with <span style={{ backgroundColor: "green", color: 'white', borderRadius: "5px"}}><FontAwesomeIcon icon={faDollarSign} /></span> <span style={{ fontWeight: "bold"}}>Afterpay</span><img src="https://i.ibb.co/MkLY6WfZ/SVG.png" alt="SVG"/> </p>
                    </div>
                    <hr />
                    <div>
                        <p>UMF™ scale</p>
                        <p style={{ textDecoration: 'underline', textDecorationColor: "orange"}}>UMF™ 10+</p>
                        <p style={{ textDecoration: 'underline', textDecorationColor: 'red'}}>UMF™ 15+</p>
                        <p style={{ textDecoration: 'underline', textDecorationColor: "red"}}>UMF™ 20+</p>
                        <p style={{ textDecoration: 'underline', textDecorationColor: "#830065", color:'#830065'}}>UMF™ 24+</p>
                        <p style={{ textDecoration: 'underline', textDecorationColor: "green"}}>UMF™ 28+</p>
                        <p style={{ textDecoration: 'underline',  textDecorationColor: "green"}}>UMF™ 30+</p>
                    </div>
                    <hr />
                    <div>
                        <p>Taste Profile</p>
                        <div style={{ padding: "20px" }}>
                            <input
                                type="range"
                                min="0"
                                max="100"
                                style={{ width: "90%" }}
                            />
                        </div>
                        <div className='slide_details'>
                            <p>Clean & Intense</p>
                            <p>Bold & Intense</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Home;