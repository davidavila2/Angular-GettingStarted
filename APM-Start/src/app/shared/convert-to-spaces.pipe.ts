import { Pipe } from "@angular/core"

@Pipe({
  name: 'convertToSpaces'
})
export class convertToSpacesPipe {

  transform(value: string, character: string): string {
    return value.replace(character, ' ')
  }
}
