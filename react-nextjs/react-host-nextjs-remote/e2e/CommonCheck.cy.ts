import {BaseMethods} from "../../../cypress/common/base";
import {baseSelectors} from "../../../cypress/common/selectors";
import {Constants} from "../../../cypress/fixtures/constants";

const basePage: BaseMethods = new BaseMethods()
const appsData = [
    {
        appName: Constants.elementsText.reactHostNextJsApp.remoteComponents.header,
        appNav: Constants.elementsText.reactHostNextJsApp.remoteComponents.nav,
        host: 8080,
        appType: Constants.commonConstantsData.basicComponents.host
    },
    {
        host:8081,
        appType: Constants.commonConstantsData.basicComponents.host
    }
]

appsData.forEach((
    property: {
        appName?: string,
        appNav?: string,
        host: number,
        appType: string
    }
)=>{
    describe(`Check ${property.appType} App starts and running`, () => {
        before(()=> {
            basePage.openLocalhost(property.host)
        })
        it(`Check ${property.appType} App UI elements`, ()=> {
            basePage.checkUrlText(`http://localhost:${property.host}/`, true)
            if (property.host == 8080){
                basePage.checkElementWithTextPresence({
                    selector: baseSelectors.divElement,
                    text: String(property.appName)
                })
                basePage.checkElementWithTextPresence({
                    selector: baseSelectors.navigation,
                    text: String (property.appNav)
                })
            }
        })
    })
})