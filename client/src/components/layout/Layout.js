"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@chakra-ui/react");
var react_2 = __importDefault(require("react"));
var Footer_1 = __importDefault(require("./Footer"));
var Header_1 = __importDefault(require("./Header"));
var Main_1 = __importDefault(require("./Main"));
function Layout() {
    return (<react_1.Grid templateAreas={"\"header header\"\n                        \"nav main\"\n                        \"nav footer\""} gridTemplateRows={'50px 1fr 30px'} gridTemplateColumns={'0px 1fr'} h='200px' gap='1' color='blackAlpha.700' fontWeight='bold'>
            <react_1.GridItem pl='2' bg='orange.300' area={'header'}>
                <Header_1.default />
            </react_1.GridItem>
            <react_1.GridItem pl='2' bg='green.300' area={'main'}>
                <Main_1.default />
            </react_1.GridItem>
            <react_1.GridItem pl='2' bg='blue.300' area={'footer'}>
                <Footer_1.default />
            </react_1.GridItem>
        </react_1.Grid>);
}
exports.default = Layout;
