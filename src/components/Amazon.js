import React from 'react';
import {
	Grid, Typography, IconButton,
	TableContainer, Table, TableHead, TableBody, TableRow, TableCell
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import '../css/App.css';
import TwitchUser from './TwitchUser';
import TwitchContext from '../twitch';
import { OpenInApp } from 'mdi-material-ui';
import open from 'open';

import Worker from '../amazon.worker.js';
const worker = new Worker();

const useStyles = makeStyles({
	root: {
		display: 'flex',
		flexDirection: 'column',
		'& h4': {
			margin: '2vw'
		},
		'& iframe': {
			flexGrow: 1,
			border: 'none'
		}
	}
});
function reduce(state, action) {
	return state.concat(action);
}

export default function Amazon({ shown }) {
	const classes = useStyles();
	const twitch = React.useContext(TwitchContext);
	const [messages, addMessage] = React.useReducer(reduce, []);

	const handleMessage = async (msg) => {
		worker.postMessage(msg);
	};

	console.log(messages);

	React.useEffect(() => {
		worker.addEventListener('message', event => {
			console.log("payload", event.data);
			addMessage(event.data);
		});
		twitch.client.on('msg', handleMessage);
		setTimeout(() => [{ "text": "https://www.amazon.com/Cancelling-Headphones-Bluetooth-Microphone-Cellphone/dp/B077YG22Y9/ref=sr_1_1_sspa?keywords=vote+1+if+you+see+this&qid=1582860739&s=electronics&sr=1-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUE1Q1ZGMUlJRlJOTTYmZW5jcnlwdGVkSWQ9QTA1MzE2ODIxM1gyT05EN0JUQVE3JmVuY3J5cHRlZEFkSWQ9QTAzMDU5NzkxWTdWRVZBVjNCN1hUJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ== gaming", "info": { "userInfo": { "displayName": "Zaqwe51", "userId": "81904506", "badges": [["subscriber", "3"], ["premium", "1"]] } } }, { "text": "https://www.amazon.com/Shrek-Smash-Crash-Racing-PlayStation-2/dp/B000GVUXLO/ref=sr_1_2?crid=2T0AJHM0G0A1C&keywords=shrek+racing+game&qid=1582861631&sprefix=shrek+rac%2Caps%2C157&sr=8-2", "info": { "userInfo": { "displayName": "hiri3", "userId": "245993404", "badges": [["subscriber", "0"], ["premium", "1"]] } } }, { "text": "https://www.amazon.com/Jesus-Horses-Shirt-Horse-Women/dp/B07KWB7K5H/ref=sr_1_15?dchild=1&keywords=horse+girl+shirt&qid=1582861557&sr=8-15 m", "info": { "userInfo": { "displayName": "GayKevin", "userId": "174446451", "badges": [["subscriber", "3"], ["premium", "1"]] } } }, { "text": "https://www.amazon.com/Lorigun-Sunglasses-Pixelated-Mosaic-Glasses/dp/B074361MM5/ref=sr_1_9?keywords=pixel+glasses&qid=1582860161&sr=8-9", "info": { "userInfo": { "displayName": "Eclips301", "userId": "119139180", "badges": [["subscriber", "0"], ["bits", "100"]] } } }, { "text": "https://www.amazon.com/AZ-FLAG-USSR-Flag-Communist/dp/B00MOWCM80/ref=sr_1_6?keywords=ussr+flag&qid=1582861547&sr=8-6", "info": { "userInfo": { "displayName": "sirDallas", "userId": "99289586", "badges": [["subscriber", "6"]] } } }, { "text": "https://www.amazon.com/dp/B0094J4DE2/ref=cm_sw_r_cp_apa_i_jLiwEbXY0PP2K", "info": { "userInfo": { "displayName": "Fireflame30056", "userId": "70965779", "badges": [["subscriber", "3"], ["bits-charity", "1"]] } } }, { "text": "https://www.amazon.com/Tech-Deck-Starter-Exclusive-Trainer/dp/B07C41VW28/ref=mp_s_a_1_4?keywords=tech+deck+ramps&qid=1582859773&sr=8-4 I", "info": { "userInfo": { "displayName": "Yankees22", "userId": "470985656", "badges": [["subscriber", "0"]] } } }, { "text": "https://www.amazon.com/Lover-VINYL-Taylor-Swift/dp/B07YMFX3DZ/ref=tmm_vnl_swatch_0?_encoding=UTF8&qid=1582861630&sr=8-1", "info": { "userInfo": { "displayName": "heyyoukewl", "userId": "182810562", "badges": [["subscriber", "3"], ["premium", "1"]] } } }, { "text": "https://www.amazon.com/Ludwig-Mogul-birthday-Sweatshirt-Hoodie/dp/B083LM7BDB/ref=sr_1_8?keywords=mogul+moves&qid=1582860390&sr=8-8", "info": { "userInfo": { "displayName": "Cdoomchu", "userId": "162975494", "badges": [["subscriber", "3"], ["sub-gifter", "10"]] } } }, { "text": "https://www.amazon.com/Laminated-Tomboy-Grown-Lesbian-Poster/dp/B07DKYD613/ref=sr_1_9?keywords=im+not+gay+poster&qid=1582860147&sr=8-9", "info": { "userInfo": { "displayName": "jamjam10901", "userId": "429301413", "badges": [["subscriber", "0"], ["premium", "1"]] } } }, { "text": "https://www.amazon.com/Proactiv-3-Step-Acne-Treatment-System/dp/B00SH46VR2/", "info": { "userInfo": { "displayName": "luciddaymare", "userId": "106697441", "badges": [["subscriber", "6"], ["premium", "1"]] } } }, { "text": "https://www.amazon.com/Hang-There-Cat-Poster-Motivational/dp/B073FKH276?ref_=fsclp_pl_dp_10", "info": { "userInfo": { "displayName": "ditta_tv", "userId": "57110460", "badges": [["subscriber", "3"], ["premium", "1"]] } } }, { "text": "https://www.amazon.com/Ludwig-Element-Evolution-5-piece-Drum/dp/B01M04PUJO/ref=sr_1_3?crid=SWNT8HD5FRE8&keywords=ludwig+drum+set&qid=1582861606&sprefix=ludwig+drum%2Caps%2C214&sr=8-3 m", "info": { "userInfo": { "displayName": "spbarnes2", "userId": "201748930", "badges": [["subscriber", "3"], ["premium", "1"]] } } }, { "text": "https://www.amazon.com/Spitzys-Caution-Extreme-Progress-Decoration/dp/B07H4CGCVX/ref=sr_1_32?crid=2OB5U223LKEHS&keywords=funny+posters+for+college+dorm&qid=1582860487&sprefix=funny+postr%2Caps%2C172&sr=8-32", "info": { "userInfo": { "displayName": "Cbock32", "userId": "72537459", "badges": [["subscriber", "0"]] } } }, { "text": "https://www.amazon.com/gp/product/B07K9QHF4P?pf_rd_p=ab873d20-a0ca-439b-ac45-cd78f07a84d8&pf_rd_r=5CWF69RY8R4RNDENFW07", "info": { "userInfo": { "displayName": "Yurinate", "userId": "137326258", "badges": [["subscriber", "0"]] } } }, { "text": "Pokemon Pikachu Boys Swim Trunks Swimwear (Little Kid/Big Kid) (10/12, Red/Royal) https://www.amazon.com/dp/B07NJCFK3D/ref=cm_sw_r_cp_apa_i_b0iwEbB7PWF89", "info": { "userInfo": { "displayName": "AutisticAngel007", "userId": "170898168", "badges": [["subscriber", "0"]] } } }, { "text": "https://www.amazon.com/Dick-Christ-Quotation-Framed-Poster/dp/B074N4VZQ5/ref=sr_1_273?keywords=funny+framed+art&qid=1582860976&sr=8-273", "info": { "userInfo": { "displayName": "Kozakura", "userId": "40099000", "badges": [["subscriber", "6"], ["bits", "100"]] } } }, { "text": "https://www.amazon.com/Only-Care-About-Anime-T-Shirt/dp/B079669TJN/ref=sr_1_6?dchild=1&keywords=anime+poster&qid=1582861542&sr=8-6 https://www.amazon.com/Only-Care-About-Anime-T-Shirt/dp/B079669TJN/ref=sr_1_6?dchild=1&keywords=anime+poster&qid=1582861542&sr=8-6", "info": { "userInfo": { "displayName": "Puffzirs", "userId": "109388037", "badges": [["subscriber", "3"], ["premium", "1"]] } } }, { "text": "https://www.amazon.com/Advertising-Business-Poster-Sign-Personal/dp/B07MFZDL51/ref=sr_1_14?keywords=taxes+poster&qid=1582860333&sr=8-14", "info": { "userInfo": { "displayName": "Jarmzie", "userId": "89325314", "badges": [["subscriber", "0"]] } } }, { "text": "https://www.amazon.com/Backpack-Gaming-Sweatshirt-Stickers-X-Large/dp/B07KBFYRL2/ref=sr_1_21_sspa?keywords=gamer&qid=1582861599&sr=8-21-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyNEI5M09ZVkI0OUhLJmVuY3J5cHRlZElkPUEwMTIyODQ4MTkyR1RHWTI3V01JOSZlbmNyeXB0ZWRBZElkPUEwNDY4MTQ5MVhSMllOMFpWMDBRTSZ3aWRnZXROYW1lPXNwX2J0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=", "info": { "userInfo": { "displayName": "ItsEmberrrr", "userId": "128579284", "badges": [["subscriber", "0"]] } } }, { "text": "https://www.amazon.com/WITHMOONS-Canada-Union-Beanie-JZP0027/dp/B07K1LR7YC/ref=mp_s_a_1_1?dchild=1&keywords=canada%2Btoque&qid=1582859786&sr=8-1&th=1&psc=1", "info": { "userInfo": { "displayName": "wavedavesupreme", "userId": "456781588", "badges": [["subscriber", "3"], ["bits", "1000"]] } } }, { "text": "https://www.amazon.com/Stinky-Monke-Vaporwave-Outrun-T-Shirt/dp/B07YT7PWPY/ref=sr_1_2?dchild=1&keywords=le+monke&qid=1582861516&sr=8-2", "info": { "userInfo": { "displayName": "ShukleTV", "userId": "44588205", "badges": [["subscriber", "6"], ["premium", "1"]] } } }, { "text": "https://www.amazon.com/Next-Innovations-Metal-Decor-Moose/dp/B01N24BDOI/ref=sr_1_4?keywords=moose+mount&qid=1582861616&sr=8-4", "info": { "userInfo": { "displayName": "AG11_", "userId": "86357144", "badges": [["subscriber", "3"]] } } }, { "text": "https://www.amazon.com/Rapidfire-Digital-Programmable-Controller-Beadmaking/dp/B00CUKD1UY/ref=sr_1_1?keywords=kiln&qid=1582861540&sr=8-1 https://www.amazon.com/Rapidfire-Digital-Programmable-Controller-Beadmaking/dp/B00CUKD1UY/ref=sr_1_1?keywords=kiln&qid=1582861540&sr=8-1", "info": { "userInfo": { "displayName": "tj__i", "userId": "231290204", "badges": [["subscriber", "6"], ["sub-gifter", "10"]] } } }, { "text": "ok https://www.amazon.com/Sharks-Kin-Poster-24-36in/dp/B014I94H1Q/ref=sr_1_125?keywords=posters&qid=1582861633&rnid=2941120011&s=home-garden&sr=1-125", "info": { "userInfo": { "displayName": "paboi360", "userId": "180858590", "badges": [["subscriber", "3"]] } } }, { "text": "https://www.amazon.com/Ludwig-Mogul-birthday-Sweatshirt-Hoodie/dp/B083LM7BDB/ref=sr_1_1?crid=2WMQN69QKK9KA&keywords=ludwig+mogul+moves&qid=1582861432&sprefix=ludwig+mogul%2Caps%2C192&sr=8-1", "info": { "userInfo": { "displayName": "shrimpfrick", "userId": "466099092", "badges": [["subscriber", "3"], ["sub-gifter", "1"]] } } }, { "text": "https://www.amazon.com/Lolita-Cosplay-Costume-Children-Hairband/dp/B07JVP7NN5/ref=sr_1_10?crid=3NACT2RB1MB0L&dchild=1&keywords=fursuit&qid=1582861567&sprefix=ahegao+ts%2Caps%2C145&sr=8-10", "info": { "userInfo": { "displayName": "hrblock", "userId": "69644931", "badges": [["subscriber", "3"], ["sub-gift-leader", "2"]] } } }, { "text": "https://www.amazon.com/dp/B07N7DH7NL?aaxitk=GW4JIoJ4sMyQJcx3vM0xFghttps://www.amazon.com/dp/B07N7DH7NL?aaxitk=GW4JIoJ4sMyQJcx3vM0xFghttps://www.amazon.com/dp/B07N7DH7NL?aaxitk=GW4JIoJ4sMyQJcx3vM0xFghttps://www.amazon.com/dp/B07N7DH7NL?aaxitk=GW4JIoJ4sMyQJcx3vM0xFghttps://www.amazon.com/dp/B07N7DH7NL?aaxitk=GW4JIoJ4sMyQJcx3vM0xFghttps://www.amazon.com/dp/B07N7DH7NL?aaxitk=GW4JIoJ4sMyQJcx3vM0xFghttps://www.amazon.com/dp/B07N7DH7NL?aaxitk=GW4JIoJ4sMyQJcx3vM0xFg", "info": { "userInfo": { "displayName": "bradydidntcheat", "userId": "141334606", "badges": [["subscriber", "3"], ["premium", "1"]] } } }, { "text": "https://www.amazon.com/Rogue-River-Tactical-Bedroom-Slayer/dp/B07DPS5Q9M/ref=mp_s_a_1_3?keywords=gamer+poster&qid=1582860364&sr=8-3", "info": { "userInfo": { "displayName": "Drinkabletrees5555", "userId": "96124097", "badges": [["subscriber", "3"], ["premium", "1"]] } } }, { "text": "https://www.amazon.com/Fans-Co-Sundays-Brady-Flag/dp/B07XJZ8L3R/ref=sr_1_1?dchild=1&keywords=tom+brady+flag&qid=1582860486&sr=8-1", "info": { "userInfo": { "displayName": "patriiiots", "userId": "484782712", "badges": [["subscriber", "0"]] } } }, { "text": "https://www.amazon.com/Bold-Brash-Squidward-Painting-Abstract/dp/B07CJ5WF55/ref=mp_s_a_1_3?keywords=bold+and+brash&qid=1582860344&sprefix=bold+and+&sr=8-3", "info": { "userInfo": { "displayName": "MrFullMetalJacket", "userId": "176411508", "badges": [["subscriber", "0"], ["premium", "1"]] } } }, { "text": "https://www.amazon.ca/Reversible-USONG-Changeable-Decorative-Pillowcase/dp/B074DR4MSZ/ref=sr_1_13?keywords=laughing+emoji&qid=1582860307&sr=8-13", "info": { "userInfo": { "displayName": "meowzorg", "userId": "273709775", "badges": [["subscriber", "0"]] } } }, { "text": "https://www.amazon.com/VintageTee-Womens-Freaking-Awesome-Boyfriend/dp/B07Y8QHVXD/ref=sr_1_56?crid=3I5JCLN83TK76&dchild=1&keywords=my+boyfriend+bought+me+this+shirt&qid=1582860078&sprefix=my+boyfriend+bought+%2Caps%2C195&sr=8-56 pls", "info": { "userInfo": { "displayName": "Uhkneerudh", "userId": "127395747", "badges": [["subscriber", "0"], ["bits-charity", "1"]] } } }, { "text": "https://www.amazon.com/Everything-Funny-Illustration-Inspirational-Motivational/dp/B07V9GGZQ4/ref=sr_1_1?keywords=canvas+art+funny&qid=1582860486&sr=8-1", "info": { "userInfo": { "displayName": "MrWindaroni", "userId": "109577933", "badges": [["subscriber", "0"], ["premium", "1"]] } } }, { "text": "https://www.amazon.com/Cos-play-Knee-high-Riding-Boots-brown/dp/B01DSO16CK/ref=sr_1_12?dchild=1&keywords=knee+high+boots+men&qid=1582861639&sr=8-12", "info": { "userInfo": { "displayName": "Panexdel", "userId": "184453007", "badges": [["subscriber", "3"]] } } }, { "text": "https://www.amazon.com/Accoutrements-12367-Pigeon-Mask/dp/B00BBYGW2Y/ref=sr_1_1?keywords=Accoutrements+Pigeon+Mask&qid=1582861482&sr=8-1", "info": { "userInfo": { "displayName": "j_haight88", "userId": "181713949", "badges": [["subscriber", "0"], ["premium", "1"]] } } }, { "text": "https://www.amazon.com/wall26-Pokers-Coolidge-Canvas-Decor/dp/B00VFZ24XU/ref=sr_1_6?crid=3LEZA95I1L8WX&keywords=the+son+of+man+painting+canvas&qid=1582860410&sprefix=the+son+of+m%2Caps%2C158&sr=8-6", "info": { "userInfo": { "displayName": "BoomerGarrett", "userId": "125711015", "badges": [["subscriber", "0"], ["sub-gifter", "1"]] } } }, { "text": "https://www.amazon.com/Stupid-People-Employed-Correctional-Officer/dp/B079STS1M4/ref=sr_1_61?dchild=1&keywords=stupid+clothes&qid=1582860193&sr=8-61 2", "info": { "userInfo": { "displayName": "oatsthegod", "userId": "95760747", "badges": [["subscriber", "3"], ["premium", "1"]] } } }, { "text": "https://www.amazon.com/Zealand-Pride-Silver-Southern-T-shirt/dp/B07BPP84TL/ref=sr_1_15?dchild=1&keywords=new+zealand&qid=1582861432&sr=8-15", "info": { "userInfo": { "displayName": "Toomzz", "userId": "103135891", "badges": [["subscriber", "0"], ["premium", "1"]] } } }, { "text": "https://www.amazon.com/VieeTee-PogChamp-Twitch-Unisex-Sweatshirt/dp/B0855CTLQJ/ref=sr_1_20?keywords=pogchamp&qid=1582859823&sr=8-20", "info": { "userInfo": { "displayName": "sdog318", "userId": "71159265", "badges": [["subscriber", "0"], ["premium", "1"]] } } }, { "text": "https://www.amazon.com/Perfect-Partners-Wisconsin-Colby-Cheese/dp/B01M0LB147/ref=sr_1_fkmr2_2?keywords=colby+jack+cheese+1+pound&qid=1582861640&sr=8-2-fkmr2", "info": { "userInfo": { "displayName": "Phere", "userId": "93790897", "badges": [["subscriber", "3"], ["sub-gifter", "1"]] } } }, { "text": "ghfgj https://www.amazon.com/Fitness-Funny-Shirt-Humorous-Cinco/dp/B01NC11D49/ref=sr_1_8?dchild=1&keywords=funny+shirts&qid=1582860281&sr=8-8", "info": { "userInfo": { "displayName": "Lyctric", "userId": "207990785", "badges": [["subscriber", "0"], ["premium", "1"]] } } }, { "text": "https://www.amazon.com/Homestuck-Book-Act-Andrew-Hussie/dp/1421599406/ref=sr_1_3?keywords=homestuck&qid=1582861638&s=grocery&sr=1-3-catcorr", "info": { "userInfo": { "displayName": "PCCryonics", "userId": "73168437", "badges": [["subscriber", "3"], ["premium", "1"]] } } }, { "text": "https://www.amazon.com/ROUNDMEUP-Promised-Neverland-Fabric-Neverland-14/dp/B07N9847S2/ref=sr_1_1?keywords=promised+neverland+poster&qid=1582860181&sr=8-1 https://www.amazon.com/ROUNDMEUP-Promised-Neverland-Fabric-Neverland-14/dp/B07N9847S2/ref=sr_1_1?keywords=promised+neverland+poster&qid=1582860181&sr=8-1 https://www.amazon.com/ROUNDMEUP-Promised-Neverland-Fabric-Neverland-14/dp/B07N9847S2/ref=sr_1_1?keywords=promised+neverland+poster&qid=1582860181&sr=8-1", "info": { "userInfo": { "displayName": "Kibin_T", "userId": "60682491", "badges": [["subscriber", "3"], ["premium", "1"]] } } }, { "text": "https://www.amazon.com/Eco-Friendly-Bamboo-Toothbrushes-Convenient-Individually/dp/B075MX9HQV/ref=sr_1_2_sspa?crid=3NN412NC6N3FT&keywords=wooden+toothbrushes&qid=1582861638&sprefix=wooden+toot%2Caps%2C187&sr=8-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyNko4WTE3QVdISTFaJmVuY3J5cHRlZElkPUEwMzQwMDczTlJNVEVNUDk1SEtZJmVuY3J5cHRlZEFkSWQ9QTA3MTc4MTUyRVRPN0FFWjQ0QkE4JndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==", "info": { "userInfo": { "displayName": "Shuuya013", "userId": "104343178", "badges": [["subscriber", "3"], ["premium", "1"]] } } }, { "text": "https://www.amazon.com/WinCraft-Purdue-University-13421115-Deluxe/dp/B011CC6E7M/ref=sr_1_34?dchild=1&keywords=Purdue+university&qid=1582860156&sr=8-34", "info": { "userInfo": { "displayName": "dragon_flu", "userId": "53318005", "badges": [["subscriber", "3"]] } } }, { "text": "https://www.amazon.com/Ratatouille-Little-Circle-White-Hoodie/dp/B07QNS4LJ2/ref=sr_1_15?dchild=1&keywords=ratatouille+shirt&qid=1582860396&sr=8-15", "info": { "userInfo": { "displayName": "bianca0104", "userId": "450116105", "badges": [["subscriber", "0"]] } } }, { "text": "https://www.amazon.com/Short-Get-Over-Persons-T-Shirt/dp/B07NSPXKP6", "info": { "userInfo": { "displayName": "r4idzzzzz", "userId": "493157563", "badges": [["subscriber", "0"], ["premium", "1"]] } } }, { "text": "https://www.amazon.com/got-Ninja-Sex-Comfortable-Baseball/dp/B07S2D8DM1/", "info": { "userInfo": { "displayName": "talantrula", "userId": "412991280", "badges": [["subscriber", "6"], ["bits", "1000"]] } } }, { "text": "https://smile.amazon.com/Simple-design-clock-decal-poster/dp/B075PRVJ8H/ref=sr_1_4?crid=3FMEF8B11TL1N&keywords=simple+plan+poster+band&qid=1582860405&sprefix=simple+plan+poster+%2Caps%2C194&sr=8-4", "info": { "userInfo": { "displayName": "Greendogblue", "userId": "32622429", "badges": [["subscriber", "0"], ["bits", "1000"]] } } }]
			.forEach(m => handleMessage(m)),
			2500);
		return () => twitch.client.off('msg', handleMessage);
	}, [twitch.client]);
	return (
		<Grid item xs={10} className={classes.root} style={{ display: shown ? 'flex' : 'none', height: '100vh' }}>
			<Typography variant="h4">Amazon Stream</Typography>
			<TableContainer>
				<Table size="small" stickyHeader>
					<TableHead style={{background: '#23272A'}}>
						<TableRow>
							<TableCell style={{ width: '50%' }}>Item</TableCell>
							<TableCell style={{ width: '10%' }}>Availability</TableCell>
							<TableCell style={{ width: '10%' }}>Price</TableCell>
							<TableCell style={{ width: '20%' }}>User</TableCell>
							<TableCell style={{ width: '10%' }}>Actions</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{messages.map((row) => (
							<TableRow key={row.details.url} hover>
								<TableCell>{row.details.title}</TableCell>
								<TableCell style={getStockStyles(row.details.availability)}>{row.details.availability}</TableCell>
								<TableCell>{row.details.price}</TableCell>
								<TableCell><TwitchUser user={row.msg.info.userInfo} /></TableCell>
								<TableCell><IconButton onClick={() => open(row.details.url)}><OpenInApp /></IconButton></TableCell>
							</TableRow>)
						)}

					</TableBody>
				</Table>
			</TableContainer>
		</Grid>
	);
}

function getStockStyles(availability) {
	availability = availability.toLowerCase();
	if (availability === 'in stock.') {
		return {
			color: '#27ae60',
			fontWeight: 'bold'
		};
	} else if (availability.includes('unavailable')) {
		return {
			color: '#7f8c8d'
		};
	} else {
		return {
			color: '#f39c12'
		};
	}
}