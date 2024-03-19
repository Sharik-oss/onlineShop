import { FormControl } from "@angular/forms";

export interface customFormGroup{
    name: FormControl;
    city: FormControl;
    state: FormControl;
    availableUnits: FormControl;
    wifi: FormControl;
    laundry: FormControl;
}
