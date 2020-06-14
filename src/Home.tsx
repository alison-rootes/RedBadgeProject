import React, {useState,useEffect} from 'react';
import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';
// import PokeCard from './assets/pokemoncard5.png'
import PokeLogo from './assets/pokemonlogo.png'




import PokemonBackGroundGif from './assets/pokemonbackground.gif'

import GrassBackground from './assets/typegrass.png'
import BugBackground from './assets/typebug.png'
import NormalBackground from './assets/typecolorless.png'
import DarkBackground from './assets/typedark.png'
import DragonBackground from './assets/typedragon.png'
import ElectricBackground from './assets/typeelectric.png'
import FairyBackground from './assets/typefairy.png'
import FightingBackground from './assets/typefighting.png'
import FireBackground from './assets/typefire.png'
import FlyingBackground from './assets/typeflying.png'
import GroundBackground from './assets/typeground.png'
import IceBackground from './assets/typeice.png'
import PoisonBackground from './assets/typepoison.png'
import PsychicBackground from './assets/typepsychic.png'
import RockBackground from './assets/typerock.png'
import SteelBackground from './assets/typesteel.png'
import WaterBackground from './assets/typewater.png'
import GhostBackground from './assets/typeghost.png'


import PokeCardGrass from './assets/pokemoncardgrass.png'
import PokeCardFire from './assets/pokemoncardfire.png'
import PokeCardWater from './assets/pokemoncardwater.png'
import PokeCardPoison from './assets/pokemoncardpoison.png'
import PokeCardPsychic from './assets/pokemoncardpsychic.png'
import PokeCardElectric from './assets/pokemoncardelectric.png'
import PokeCardFairy from './assets/pokemoncardfairy.png'
import PokeCardNormal from './assets/pokemoncardnormal.png'
import PokeCardDark from './assets/pokemoncarddark.png'
import PokeCardGhost from './assets/pokemoncardghost.png'
import PokeCardDragon from './assets/pokemoncarddragon.png'
import PokeCardIce from './assets/pokemoncardice.png'
import PokeCardGround from './assets/pokemoncardground.png'
import PokeCardRock from './assets/pokemoncardrock.png'
import PokeCardFlying from './assets/pokemoncardflying.png'
import PokeCardSteel from './assets/pokemoncardsteel.png'
import PokeCardBug from './assets/pokemoncardbug.png'
import PokeCardFighting from './assets/pokemoncardfighting.png'


import {ProgressBar} from 'react-bootstrap';
import Draggable from 'react-draggable';
import ReactAudioPlayer from 'react-audio-player';




// import PokemonTheme from './assets/pokemontheme.mp3'

const Home = () => {
//TYPE ICON IMG SRC*************************************************************************************
    let grassTypeURL = 'https://vignette.wikia.nocookie.net/pokemon/images/4/46/Type_Grass.gif/'
    let waterTypeURL = 'https://vignette.wikia.nocookie.net/pokemon/images/e/ed/Type_Water.gif'
    let fireTypeURL = 'https://vignette.wikia.nocookie.net/pokemon/images/4/4d/Type_Fire.gif/'
    let rockTypeURL = 'https://vignette.wikia.nocookie.net/pokemon/images/b/b3/Type_Rock.gif/'
    let electricTypeURL = 'https://vignette.wikia.nocookie.net/pokemon/images/a/aa/Type_Electric.gif/'
    let psychicTypeURL = 'https://vignette.wikia.nocookie.net/pokemon/images/6/65/Type_Psychic.gif/'
    let ghostTypeURL = 'https://vignette.wikia.nocookie.net/pokemon/images/f/f2/Type_Ghost.gif'
    let bugTypeURL = 'https://vignette.wikia.nocookie.net/pokemon/images/6/64/Type_Bug.gif/'
    let dragonTypeURL = 'https://vignette.wikia.nocookie.net/pokemon/images/2/26/Type_Dragon.gif/'
    let fairyTypeURL = 'https://vignette.wikia.nocookie.net/pokemon/images/7/74/Type_Fairy.gif/'
    let fightingTypeURL = 'https://vignette.wikia.nocookie.net/pokemon/images/6/6b/Type_Fighting.gif/'
    let iceTypeURL = 'https://vignette.wikia.nocookie.net/pokemon/images/8/84/Type_Ice.gif/'
    let normalTypeURL = 'https://vignette.wikia.nocookie.net/pokemon/images/6/61/Type_Normal.gif/'
    let steelTypeURL = 'https://vignette.wikia.nocookie.net/pokemon/images/a/ab/Type_Steel.gif'
    let groundTypeURL = 'https://vignette.wikia.nocookie.net/pokemon/images/1/1d/Type_Ground.gif/'
    let flyingTypeURL = 'https://vignette.wikia.nocookie.net/pokemon/images/4/4b/Type_Flying.gif/'
    let poisonTypeURL = 'https://vignette.wikia.nocookie.net/pokemon/images/8/82/Type_Poison.gif/'
    let darkTypeURL = 'https://vignette.wikia.nocookie.net/pokemon/images/0/0d/Type_Dark.gif/'
//useStates*************************************************************************************
    //Shows Pokemon Card
    const [showCard, setShowCard] = useState(false)
    //Show Submit

    const [showSubmit, setShowSubmit] = useState(false)
    //Background Image
    const [backgroundImg, setBackgroundImg] = useState(PokemonBackGroundGif)
    //Pokemon Name
    const [pokeName, setPokeName] = useState <string> ('')

    //Input Field/Search Field Value
    const [inputFieldValue, setInputFieldValue]=useState <string>('')
    //Pokemon Number
    const [pokeNum,setPokeNum] = useState()

    

    const [pokeFetch, setPokeFetch] = useState()
    //PokeCardImg
    const [pokeCardImg, setPokeCardImg] = useState<string>()
    //Pokemon Image
    const [pokeImgUrl, setPokeImgUrl] = useState('')
    //Pokemon Type Icons
    const [pokeType1Url, setPokeType1Url] = useState('')
    const [pokeType2Url, setPokeType2Url] = useState('')
    //Pokemon Abilities
    const [pokeAbility1, setPokeAbility1] = useState('')
    const [pokeAbility2, setPokeAbility2] = useState('')
    //Pokemon Stats
    const [pokeHp, setPokeHp] = useState<number>()
    const [pokeAtt, setPokeAtt] = useState<number>()
    const [pokeDef, setPokeDef] = useState<number>()
    const [pokeSpeed, setPokeSpeed] = useState<number>()
    const [pokeSpAtt, setPokeSpAtt] = useState<number>()
    const [pokeSpDef, setPokeSpDef] = useState<number>()

    //Pokemon Evo Data
    const [evolutionChainText, setEvolutionChainText] = useState('')

    const [evoStage1, setEvoStage1] = useState('')
    const [evoStage2, setEvoStage2] = useState('')
    const [evoStage3, setEvoStage3] = useState('')
    const [evoStage4, setEvoStage4] = useState('')
    const [evoStage5, setEvoStage5] = useState('')
    const [evoStage6, setEvoStage6] = useState('')
    const [evoStage7, setEvoStage7] = useState('')
    const [evoStage8, setEvoStage8] = useState('')
    const [evoStage9, setEvoStage9] = useState('')
    const [evoStage10, setEvoStage10] = useState('')

    const [evoStage1ImgSrc, setEvoStage1ImgSrc] = useState<string>()
    const [evoStage2ImgSrc, setEvoStage2ImgSrc] = useState<string>()
    const [evoStage3ImgSrc, setEvoStage3ImgSrc] = useState<string>()
    const [evoStage4ImgSrc, setEvoStage4ImgSrc] = useState<string>()
    const [evoStage5ImgSrc, setEvoStage5ImgSrc] = useState<string>()
    const [evoStage6ImgSrc, setEvoStage6ImgSrc] = useState<string>()
    const [evoStage7ImgSrc, setEvoStage7ImgSrc] = useState<string>()
    const [evoStage8ImgSrc, setEvoStage8ImgSrc] = useState<string>()
    const [evoStage9ImgSrc, setEvoStage9ImgSrc] = useState<string>()
    const [evoStage10ImgSrc, setEvoStage10ImgSrc] = useState<string>()

//Main Fetch URL********************************
    let pokemonURL:string  = `https://pokeapi.co/api/v2/pokemon/`
//Evolution Fetch URL*********************
    let speciesURL:string = `https://pokeapi.co/api/v2/pokemon-species/`
//CSS STYLING*************************************************************************************
    //Pokemon Logo Img Style
    const pokemonLogoImg: React.CSSProperties = {
        userSelect: 'none',
        marginTop:'2%',
        filter: 'drop-shadow(5px 5px 5px black)',
        width:'25%',

      };
    //Gotta Fetch Em All Style
    const gottaFetchEmAllStyle: React.CSSProperties ={
        fontSize:'2rem',
        color:'white',
        // textShadow:'3px 3px 1px black',
        textShadow:'.2rem .2rem 0 blue',
        userSelect:'none',
        marginTop:'.5%',
        filter: 'drop-shadow(2px 2px 5px black)'
    }
    //Card Img Style
    const pokemonCardStyle: React.CSSProperties ={
        width:'82%',
        userSelect:'none',
        // backgroundColor:'black',
        borderRadius:'4%',
        position:'relative',
        filter: 'drop-shadow(6px 6px 4px black)'
    }
    //Poke Img Style
    const pokeImgStyle: React.CSSProperties={
        position:'absolute',
        right: '30%',
        top: '15%',
        width:'40%',
    }
    //Poke Type 1 Img Style
    const pokeType1ImgStyle: React.CSSProperties={
        userSelect:'none'
    }
    //Poke Type 2 Img Style
      const pokeType2ImgStyle: React.CSSProperties={
        userSelect:'none',
        marginLeft:'10%'
    }
    //Pokemon Name Text Style
    const pokemonNameTextStyle: React.CSSProperties = {
        margin:'0%',
        marginLeft:'',
        color:'white', 
        fontSize:'1.8rem',
        userSelect:'none'
    }
    //Pokemon Number Text Style
    const pokemonNumberStyle: React.CSSProperties ={
        margin:'0%',
        marginLeft:'',
        color:'white', 
        fontSize:'1rem',
        userSelect:'none'
    }
    //Pokemon Abilities Text Style
    const pokemonAbilitiesTextStyle: React.CSSProperties ={
        marginRight:'1%',
        marginLeft:'1%',
        padding:'0',
        color:'white',
        fontSize:'1rem',
        listStyleType:'none',
        userSelect:'none',
        width:'100px'
    }


    const evolutionChainTextStyle: React.CSSProperties ={
        fontSize:'1.6rem',
        color:'white',
        // textShadow:'3px 3px 1px black',
        textShadow:'.2rem .2rem 0 blue',
        userSelect:'none',
        marginTop:'.5%',
        filter: 'drop-shadow(2px 2px 5px black)'
    }

    const evolutionNameTextStle: React.CSSProperties ={
        fontSize:'1.2rem',
        color:'white',
        // textShadow:'3px 3px 1px black',
        textShadow:'.1rem .1rem 0 blue',
        userSelect:'none',
        marginTop:'.5%',
        filter: 'drop-shadow(2px 2px 5px black)',
   
    }
//FETCH FUNCTIONS*************************************************************************************
    
    // useEffect (() => {
    //     fetchPoke();
    //  },[])



    const fetchPoke = () =>{


        fetch(pokemonURL + inputFieldValue)
        .then(res => res.json())
        .then(pokeData => {
          
            const fetchSpecies = () => {
                fetch(speciesURL + pokeData.id )
                .then(
                    res => res.json())
                .then(speciesData => {
                    
                    fetch(speciesData.evolution_chain.url)
                    .then(res => res.json())
                    .then(evoData => {
                    if(evoData.chain.evolves_to[0] !== undefined){
                        //EVOLVES FROM - if nothing, it will be pokemon base name
                        console.log(evoData.chain.evolves_to)
                        setEvoStage1(evoData.chain.species.name.charAt(0).toUpperCase() + evoData.chain.species.name.slice(1))
                        setEvoStage1ImgSrc("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + evoData.chain.species.url.slice(42).slice(0, -1)  + '.png')
                        //EVOLVES TO - NEXT EVOLUTION/ SECOND EVOLUTION
                        setEvoStage2(evoData.chain.evolves_to[0].species.name.charAt(0).toUpperCase() + evoData.chain.evolves_to[0].species.name.slice(1))
                        setEvoStage2ImgSrc("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + evoData.chain.evolves_to[0].species.url.slice(42).slice(0,-1)  + '.png')
                        //VARIABLE EVOLUTIONS....STONE...ETC...
                        if (evoData.chain.evolves_to[1] !== undefined){
                            setEvoStage4(evoData.chain.evolves_to[1].species.name.charAt(0).toUpperCase() + evoData.chain.evolves_to[1].species.name.slice(1))
                            setEvoStage4ImgSrc("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + evoData.chain.evolves_to[1].species.url.slice(42).slice(0,-1) + '.png' )
                            if (evoData.chain.evolves_to[2] !== undefined){
                            setEvoStage5(evoData.chain.evolves_to[2].species.name.charAt(0).toUpperCase() + evoData.chain.evolves_to[2].species.name.slice(1))
                            setEvoStage5ImgSrc("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + evoData.chain.evolves_to[2].species.url.slice(42).slice(0,-1) + '.png' )
                            }
                            if (evoData.chain.evolves_to[3] !== undefined){
                            setEvoStage6(evoData.chain.evolves_to[3].species.name.charAt(0).toUpperCase() + evoData.chain.evolves_to[3].species.name.slice(1))
                            setEvoStage6ImgSrc("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + evoData.chain.evolves_to[3].species.url.slice(42).slice(0,-1) + '.png' )
                            }
                            if (evoData.chain.evolves_to[4] !== undefined){
                            setEvoStage7(evoData.chain.evolves_to[4].species.name.charAt(0).toUpperCase() + evoData.chain.evolves_to[4].species.name.slice(1))
                            setEvoStage7ImgSrc("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + evoData.chain.evolves_to[4].species.url.slice(42).slice(0,-1) + '.png' )
                            }
                            if (evoData.chain.evolves_to[5] !== undefined){
                            setEvoStage8(evoData.chain.evolves_to[5].species.name.charAt(0).toUpperCase() + evoData.chain.evolves_to[5].species.name.slice(1))
                            setEvoStage8ImgSrc("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + evoData.chain.evolves_to[5].species.url.slice(42).slice(0,-1) + '.png' )
                            }
                            if (evoData.chain.evolves_to[6] !== undefined){
                            setEvoStage9(evoData.chain.evolves_to[6].species.name.charAt(0).toUpperCase() + evoData.chain.evolves_to[6].species.name.slice(1))
                            setEvoStage9ImgSrc("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + evoData.chain.evolves_to[6].species.url.slice(42).slice(0,-1) + '.png' )
                            }
                            if (evoData.chain.evolves_to[7] !== undefined){
                            setEvoStage10(evoData.chain.evolves_to[7].species.name.charAt(0).toUpperCase() + evoData.chain.evolves_to[7].species.name.slice(1))
                            setEvoStage10ImgSrc("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + evoData.chain.evolves_to[7].species.url.slice(42).slice(0,-1) + '.png' )
                            }
                        }
                        else{

                            setEvoStage4('')
                            setEvoStage5('')
                            setEvoStage6('')
                            setEvoStage7('')
                            setEvoStage8('')
                            setEvoStage9('')
                            setEvoStage10('')

                            setEvoStage4ImgSrc('')
                            setEvoStage5ImgSrc('')
                            setEvoStage6ImgSrc('')
                            setEvoStage7ImgSrc('')
                            setEvoStage8ImgSrc('')
                            setEvoStage9ImgSrc('')
                            setEvoStage10ImgSrc('')
                      
                        }

                        //EVOLVES TO - NEXT EVOLUTION/ THIRD EVOLUTION
                        if(evoData.chain.evolves_to[0].evolves_to[0] !==undefined){
                        setEvoStage3(evoData.chain.evolves_to[0].evolves_to[0].species.name.charAt(0).toUpperCase() + evoData.chain.evolves_to[0].evolves_to[0].species.name.slice(1))
                        setEvoStage3ImgSrc("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + evoData.chain.evolves_to[0].evolves_to[0].species.url.slice(42).slice(0,-1) + '.png' )
                       
                        } else{
                            setEvoStage3('')
                            setEvoStage3ImgSrc('')
                        }
                        setEvolutionChainText('Evolution:')
                        } else {
                            setEvoStage1('')
                            setEvoStage2('')
                            setEvoStage3('')
                            setEvoStage4('')
                            setEvoStage5('')
                            setEvoStage6('')
                            setEvoStage7('')
                            setEvoStage8('')
                            setEvoStage9('')
                            setEvoStage10('')

                      

                            setEvoStage1ImgSrc('')
                            setEvoStage2ImgSrc('')
                            setEvoStage3ImgSrc('')
                            setEvoStage4ImgSrc('')
                            setEvoStage5ImgSrc('')
                            setEvoStage6ImgSrc('')
                            setEvoStage7ImgSrc('')
                            setEvoStage8ImgSrc('')
                            setEvoStage9ImgSrc('')
                            setEvoStage10ImgSrc('')

                            setEvolutionChainText('')
                        }
                    })
                })
            }

            fetchSpecies();

            setShowCard(true)
          

            setPokeName(pokeData.name.charAt(0).toUpperCase() + pokeData.name.slice(1))
            setPokeImgUrl(pokeData.sprites.front_default)

            
       
            setPokeAbility1(pokeData.abilities[0].ability.name)
            if(pokeData.abilities[1] !== undefined){
            setPokeAbility2(pokeData.abilities[1].ability.name)
           
            } else {
                setPokeAbility2('')
            }
            setPokeHp(pokeData.stats[0].base_stat)
            setPokeAtt(pokeData.stats[1].base_stat)
            setPokeDef(pokeData.stats[2].base_stat)
            setPokeSpAtt(pokeData.stats[3].base_stat)
            setPokeSpDef(pokeData.stats[4].base_stat)
            setPokeSpeed(pokeData.stats[5].base_stat)

            setPokeNum(pokeData.id)
            // console.log(pokeNum)

            //Pokemon Type 1 Checker
            if (pokeData.types[0].type.name === 'grass') {
                setPokeType1Url(grassTypeURL)
                setBackgroundImg(GrassBackground)
                setPokeCardImg(PokeCardGrass)
                
            } else if (pokeData.types[0].type.name === 'poison') {
                setPokeType1Url(poisonTypeURL)
                setBackgroundImg(PoisonBackground)
                setPokeCardImg(PokeCardPoison)
            } else if (pokeData.types[0].type.name === 'water') {
                setPokeType1Url(waterTypeURL)
                setBackgroundImg(WaterBackground)
                setPokeCardImg(PokeCardWater)
            } else if (pokeData.types[0].type.name === 'fire') {
                setPokeType1Url(fireTypeURL)
                setBackgroundImg(FireBackground)
                setPokeCardImg(PokeCardFire)
            } else if (pokeData.types[0].type.name === 'rock') {
                setPokeType1Url(rockTypeURL)
                setBackgroundImg(RockBackground)
                setPokeCardImg(PokeCardRock)
            } else if (pokeData.types[0].type.name === 'electric') {
                setPokeType1Url(electricTypeURL)
                setBackgroundImg(ElectricBackground)
                setPokeCardImg(PokeCardElectric)
            } else if (pokeData.types[0].type.name === 'psychic') {
                setPokeType1Url (psychicTypeURL)
                setBackgroundImg(PsychicBackground)
                setPokeCardImg(PokeCardPsychic)
            } else if (pokeData.types[0].type.name === 'ghost') {
                setPokeType1Url (ghostTypeURL)
                setBackgroundImg(GhostBackground)
                setPokeCardImg(PokeCardGhost)
            } else if (pokeData.types[0].type.name === 'bug') {
                setPokeType1Url(bugTypeURL)
                setBackgroundImg(BugBackground)
                setPokeCardImg(PokeCardBug)
            } else if (pokeData.types[0].type.name === 'dragon') {
                setPokeType1Url( dragonTypeURL)
                setBackgroundImg(DragonBackground)
                setPokeCardImg(PokeCardDragon)
            } else if (pokeData.types[0].type.name === 'fairy') {
                setPokeType1Url(fairyTypeURL)
                setBackgroundImg(FairyBackground)
                setPokeCardImg(PokeCardFairy)
            } else if (pokeData.types[0].type.name === 'fighting') {
                setPokeType1Url(fightingTypeURL)
                setBackgroundImg(FightingBackground)
                setPokeCardImg(PokeCardFighting)
            } else if (pokeData.types[0].type.name === 'ice') {
                setPokeType1Url( iceTypeURL)
                setBackgroundImg(IceBackground)
                setPokeCardImg(PokeCardIce)
            } else if (pokeData.types[0].type.name === 'normal') {
                setPokeType1Url ( normalTypeURL)
                setBackgroundImg(NormalBackground)
                setPokeCardImg(PokeCardNormal)
            } else if (pokeData.types[0].type.name === 'steel') {
                setPokeType1Url( steelTypeURL) 
                setBackgroundImg(SteelBackground)
                setPokeCardImg(PokeCardSteel)
            } else if (pokeData.types[0].type.name === 'ground') {
                setPokeType1Url( groundTypeURL)
                setBackgroundImg(GroundBackground)
                setPokeCardImg(PokeCardGround)
            } else if (pokeData.types[0].type.name === 'flying') {
                setPokeType1Url(flyingTypeURL)
                setBackgroundImg(FlyingBackground)
                setPokeCardImg(PokeCardFlying)
            } else if (pokeData.types[0].type.name === 'dark') {
                setPokeType1Url (darkTypeURL)
                setBackgroundImg(DarkBackground)
                setPokeCardImg(PokeCardDark)
            } else if (pokeData.types[0].type.name === '' || pokeData.types[0].type.name === undefined) {
                setPokeType1Url('')
            }
            //POKEMON TYPE 2 CHECKER
            if (pokeData.types[1] !== undefined) {

                if (pokeData.types[1].type.name === 'grass') {
                    setPokeType2Url(grassTypeURL)
                } else if (pokeData.types[1].type.name === 'poison') {
                     setPokeType2Url(poisonTypeURL)
                } else if (pokeData.types[1].type.name === 'water') {
                     setPokeType2Url(waterTypeURL)
                } else if (pokeData.types[1].type.name === 'fire') {
                     setPokeType2Url(fireTypeURL)  
                } else if (pokeData.types[1].type.name === 'rock') {
                     setPokeType2Url(rockTypeURL)
                } else if (pokeData.types[1].type.name === 'electric') {
                     setPokeType2Url(electricTypeURL)
                } else if (pokeData.types[1].type.name === 'psychic') {
                     setPokeType2Url(psychicTypeURL)
                } else if (pokeData.types[1].type.name === 'ghost') {
                     setPokeType2Url(ghostTypeURL)
                } else if (pokeData.types[1].type.name === 'bug') {
                     setPokeType2Url(bugTypeURL)
                } else if (pokeData.types[1].type.name === 'dragon') {
                     setPokeType2Url(dragonTypeURL)
                } else if (pokeData.types[1].type.name === 'fairy') {
                     setPokeType2Url(fairyTypeURL)
                } else if (pokeData.types[1].type.name === 'fighting') {
                     setPokeType2Url(fightingTypeURL)
                } else if (pokeData.types[1].type.name === 'ice') {
                     setPokeType2Url(iceTypeURL)
                } else if (pokeData.types[1].type.name === 'normal') {
                     setPokeType2Url(normalTypeURL)
                } else if (pokeData.types[1].type.name === 'steel') {
                     setPokeType2Url(steelTypeURL)
                } else if (pokeData.types[1].type.name === 'ground') {
                     setPokeType2Url(groundTypeURL)
                } else if (pokeData.types[1].type.name === 'flying') {
                     setPokeType2Url(flyingTypeURL)
                } else if (pokeData.types[1].type.name === 'dark') {
                     setPokeType2Url(darkTypeURL)             }
            } else {
                 setPokeType2Url('')  }
    
        })

    }
return(
    <div style={{backgroundImage: `url(${backgroundImg})`,backgroundSize:'', height:'auto',minHeight:'100vh', backgroundPosition:'center', backgroundRepeat:'auto'}}>
        {/* Pokemon Logo */}                       
        <img  draggable="false" style={pokemonLogoImg} alt="Pokemon Logo" src= {PokeLogo}/>
        {/* search bar */}

    {/* <ReactAudioPlayer src={'./assets/pokemontheme.mp3'} autoPlay controls/> */}
        <div>
            <InputGroup>
                <InputGroupAddon addonType="prepend"></InputGroupAddon>
            <Input placeholder="Search the pokedex for YOUR favorite Pokemon" style={{marginTop:'1%', marginBottom: '1%',marginLeft:'30%', marginRight:'30%'}}  onChange={(e) =>{
                setInputFieldValue(e.target.value)
                setShowSubmit(true)
                if (e.target.value.length <= 0 ){
                    setShowSubmit(false)
                }
                else {
                    setShowSubmit(true)
                }
            }}/>
            </InputGroup>

            { showSubmit === true ?
            <button onClick={(e) => {
                fetchPoke()}}>
                Search!
            </button> : null
            }
        </div>
        {/* Gotta Fetch Em All Text */}
        <p style={gottaFetchEmAllStyle}>Gotta fetch( ) 'em all!</p>

                
        {/* Evolution Chain Text */}
        <p style={evolutionChainTextStyle}>{evolutionChainText}</p>

        {/* Evolution Names */}
  
            <div style={{display: 'flex', flexDirection:'row', justifyContent:'center'}}>
                <div>
                <p style={evolutionNameTextStle}>{evoStage1}</p>
                <img style={evolutionNameTextStle} src={evoStage1ImgSrc}/>
               
                {/* <img src={}/> */}
                </div>
                <div>
                <p style={evolutionNameTextStle}>{evoStage2}</p>
                <img style={evolutionNameTextStle} src={evoStage2ImgSrc}/>
                </div>
                <div>
                <p style={evolutionNameTextStle}>{evoStage3}</p>
                <img style={evolutionNameTextStle} src={evoStage3ImgSrc}/>
                </div>
                <div>
                <p style={evolutionNameTextStle}>{evoStage4}</p>
                <img style={evolutionNameTextStle} src={evoStage4ImgSrc}/>
                </div>
                <div>
                <p style={evolutionNameTextStle}>{evoStage5}</p>
                <img style={evolutionNameTextStle} src={evoStage5ImgSrc}/>
                </div>
                <div>
                <p style={evolutionNameTextStle}>{evoStage6}</p>
                <img style={evolutionNameTextStle} src={evoStage6ImgSrc}/>
                </div>
                <div>
                <p style={evolutionNameTextStle}>{evoStage7}</p>
                <img style={evolutionNameTextStle} src={evoStage7ImgSrc}/>
                </div>
                <div>
                <p style={evolutionNameTextStle}>{evoStage8}</p>
                <img style={evolutionNameTextStle} src={evoStage8ImgSrc}/>
                </div>
                <div>
                <p style={evolutionNameTextStle}>{evoStage9}</p>
                <img style={evolutionNameTextStle} src={evoStage9ImgSrc}/>
                </div>
                <div>
                <p style={evolutionNameTextStle}>{evoStage10}</p>
                <img style={evolutionNameTextStle} src={evoStage10ImgSrc}/>
                </div>
            </div>
  

        <div style={{ display:'flex', flexDirection:'row', justifyContent:'center'}}>
                {/* Card Container */}
                {showCard === true ? 
                <Draggable>
                    <div>
                       {/* Card Img */}
                        <img draggable="false" style={pokemonCardStyle} alt='Pokemon Card' src ={pokeCardImg}/>
                        {/* Pokemon Img */}
                        <img draggable="false" className ='pokeImg'style={pokeImgStyle} alt="pokeImg" src={pokeImgUrl} onClick={() => {
                            // setPokeNum(Math.round(Math.random() * 10*80.2))
                            // fetchPoke()  
                            }}/>
                            <div style={{}}>
                                <div style={{display:'flex', flexDirection:'column', position:'absolute',top:'53%',textAlign:'center', width:'100%',textShadow:'1px 1px 1px black'}}>
                                    {/* Pokemon Name Text */}
                                    <p style={pokemonNameTextStyle}>{pokeName}</p>
                                    <p style={{opacity:'.3', marginTop:'-6%', marginBottom:'0'}}>__________________</p>
                                    {/* Pokemon Number */}
                                    <p style={pokemonNumberStyle}># {pokeNum}</p>
                                    <div style={{display:'flex', flexDirection:'row', marginLeft:'auto',marginRight:'auto', height:'100px'}}>
                                        {/* Pokemon Abilities Text */}
                                        <div style={{marginRight: '9%',marginTop: ''}}>
                                            <ul style={pokemonAbilitiesTextStyle}>Abilities:
                                                <li style={{fontSize:'1rem'}}>{pokeAbility1}</li>
                                                <li style={{fontSize:'1rem'}}>{pokeAbility2}</li>
                                            </ul>
                                        </div>
                                        {/* Pokemon Stat Bars */}
                                        <div style={{ width: 200, display:'flex',flexDirection:'column', justifyContent:'space-evenly',userSelect:'none' }}>
                                            <ProgressBar style={{marginTop:'1%'}} now={pokeHp} label={`HP: ${pokeHp}`} />
                                            <ProgressBar now={pokeAtt} label={`Att: ${pokeAtt}`} />
                                            <ProgressBar now={pokeDef} label={`Def: ${pokeDef}`} />
                                            <ProgressBar now={pokeSpeed} label={`Speed: ${pokeSpeed}`} />
                                            <ProgressBar now={pokeSpAtt} label={`Sp.Att: ${pokeSpAtt}`} />
                                            <ProgressBar now={pokeSpDef} label={`Sp.Def: ${pokeSpDef}`} />
                                        </div>
                                        
                                    </div>
                                   
                     
                               <div style={{display:'flex', flexDirection:'column', width: '100px'}}>
                        
                                       {/* Pokemon Type Images */}
                               
                                <div style={{display:'flex',flexDirection:'row',position:'absolute', top:'70.5%', left:'15%'}}>
                                    {/* Pokemon Type Img 1 */}
                                    <img  draggable="false" style={pokeType1ImgStyle} src={pokeType1Url}/>
                                    {/* Pokemon Type Img 2 */}
                                    <img draggable="false" style={pokeType2ImgStyle} src={pokeType2Url}/>
                                </div>
                                </div>    
                                <p style={{opacity:'.3'}}>__________________</p>
                                </div>
                         
                            </div>
                    </div>
                </Draggable>
:null
                        } 
        
        </div>

    </div>
)
}

export default Home