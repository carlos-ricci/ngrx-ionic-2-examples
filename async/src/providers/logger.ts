import { Injectable } from '@angular/core';

/** 
Simple provider class that will write in console if configured with the option isActive:true. Provide isActive:false for absence of log

provide the provider like the following:

import { Logger, loggerFactory } from '../providers/logger';

...
...

providers: [{ provide: Logger, useFactory: loggerFactory({ isActive: true }) }]


*/
@Injectable()
export class Logger {
 
  isActive: boolean = true;

  constructor(loggerConfig: any) {
    this.isActive = loggerConfig.isActive;
  }

  log( message: any, ...optionalParams: any[]){
    if(this.isActive)
      console.log(message, optionalParams );
  }

  setActive(isActive: boolean)
  {
    this.isActive = isActive;
  }

}

export let loggerFactory = (options: any) => {
  return () => { return new Logger(options) };
}



