"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./App.css");
var react_2 = require("@chakra-ui/react");
var Layout_1 = __importDefault(require("./components/layout/Layout"));
function App() {
    return (<react_2.ChakraProvider>
      <div className="App">
        <Layout_1.default />
      </div>
    </react_2.ChakraProvider>);
}
exports.default = App;
