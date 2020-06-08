import { ReactComponent as alpaca } from './alpaca.svg'
import { ReactComponent as camel } from './camel.svg'
import { ReactComponent as crocodile } from './crocodile.svg'
import { ReactComponent as deer } from './deer.svg'
import { ReactComponent as dolphin } from './dolphin.svg'
import { ReactComponent as egret } from './egret.svg'
import { ReactComponent as elephant } from './elephant.svg'
import { ReactComponent as fox } from './fox.svg'
import { ReactComponent as giraffe } from './giraffe.svg'
import { ReactComponent as  goat} from './goat.svg'
import { ReactComponent as  gorilla} from './gorilla.svg'
import { ReactComponent as  hippopotamus} from './hippopotamus.svg'
import { ReactComponent as  kangaroo} from './kangaroo.svg'
import { ReactComponent as  koala} from './koala.svg'
import { ReactComponent as  lion} from './lion.svg'
import { ReactComponent as  meerkat} from './meerkat.svg'
import { ReactComponent as  monkey} from './monkey.svg'
import { ReactComponent as  ostrich} from './ostrich.svg'
import { ReactComponent as  owl} from './owl.svg'
import { ReactComponent as  parrot} from './parrot.svg'
import { ReactComponent as  penguin} from './penguin.svg'
import { ReactComponent as  polar_bear} from './polar_bear.svg'
import { ReactComponent as  rabbit} from './rabbit.svg'
import { ReactComponent as  raccoon} from './raccoon.svg'
import { ReactComponent as  rhino} from './rhino.svg'
import { ReactComponent as  sea_lion} from './sea_lion.svg'
import { ReactComponent as  sloth} from './sloth.svg'
import { ReactComponent as  squirrel} from './squirrel.svg'
import { ReactComponent as  zebra} from './zebra.svg'



export const getSvg = (id) => {
    const svgs = [
        alpaca, 
        camel, 
        crocodile, 
        deer, 
        dolphin, 
        egret, 
        elephant, 
        fox,
        giraffe,
        goat,
        gorilla,
        hippopotamus,
        kangaroo,
        koala,
        lion,
        meerkat,
        monkey,
        ostrich,
        owl,
        parrot,
        penguin,
        polar_bear,
        rabbit,
        raccoon,
        rhino,
        sea_lion,
        sloth,
        squirrel,
        zebra    
    ]
    return svgs[id]
}