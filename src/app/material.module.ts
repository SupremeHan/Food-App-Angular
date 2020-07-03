import { NgModule } from '@angular/core';
import { MatSidenavModule, MatFormFieldModule, MatButtonModule, MatDialogModule, MatInputModule, MatTableModule } from '@angular/material';


@NgModule ({

    imports: [MatSidenavModule, MatFormFieldModule, MatButtonModule, MatDialogModule,
    MatInputModule,MatFormFieldModule,MatTableModule],
    exports: [MatSidenavModule, MatFormFieldModule, MatButtonModule, MatDialogModule,
    MatInputModule,MatFormFieldModule,MatTableModule]
})

export class MaterialModule{}