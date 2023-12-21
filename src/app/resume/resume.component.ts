import { Component } from '@angular/core';
import {SertificateComponent} from '../sertificate/sertificate.component';
import {FotoComponent} from '../foto/foto.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [SertificateComponent, FotoComponent, CommonModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
title="резюме";
linkFb="https://www.facebook.com/koricaD";
linkGh="https://github.com/Kori4kaD";
linkInst="https://www.instagram.com/korica_darina/";
}
