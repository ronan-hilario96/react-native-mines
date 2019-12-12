import { Dimensions } from 'react-native'

const params = {
    blockSize: 30,
    borderSize: 5,
    fontSize: 15,
    headerRation: 0.15, // Proporção do painel superior da tela
    difficultLevel: 0.1,
    getCoulumnsAmount() {
        const width = Dimensions.get('window').width
        return Math.floor(width / params.blockSize)
    },
    getRowsAmount() {
        const totalHeight = Dimensions.get('window').height
        const borderHeight = totalHeight * (1 - params.headerRation)
        return Math.floor(borderHeight / params.blockSize)
    }
}

export default params