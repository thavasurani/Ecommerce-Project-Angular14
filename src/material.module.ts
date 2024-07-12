import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatInputModule } from "@angular/material/input"
import { MatDialogModule } from "@angular/material/dialog"
import { MatSelectModule } from "@angular/material/select"
import { MatRadioModule } from "@angular/material/radio"
import { MatCheckboxModule } from "@angular/material/checkbox"

@NgModule({
    exports: [MatTableModule,MatRadioModule, MatSortModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatDialogModule, MatSelectModule, MatRadioModule, MatCheckboxModule ]
})
export class MaterialModule{

}