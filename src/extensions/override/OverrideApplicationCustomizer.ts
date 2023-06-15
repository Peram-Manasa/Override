import {
  BaseApplicationCustomizer
} from '@microsoft/sp-application-base';
import "./override.scss"
/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IOverrideApplicationCustomizerProperties {
  // This is an example; replace with your own property
  testMessage: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class OverrideApplicationCustomizer
  extends BaseApplicationCustomizer<IOverrideApplicationCustomizerProperties> {

  public lists(): Promise<void> {
    document.getElementById("SPPageChrome").style.display="flex";
    return Promise.resolve();
  }
  public block(): Promise<void> {
    document.getElementById("spoAppComponent").style.display="flex";
    return Promise.resolve();
  }
  public onInit(): Promise<void> {
    //setTimeout(this.block,1500)
    //setTimeout(this.lists,800)
    return Promise.resolve();
  }
}
