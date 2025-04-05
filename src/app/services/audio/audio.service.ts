import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AudioService {
  
  speakKannada(text: string) {
    const texta = encodeURIComponent('ನಮಸ್ಕಾರ');
    console.log(texta)
    const audio = new Audio(
      `data:audio/mp3;base64,${texta}`
    );
    console.log(audio)
    audio.play();
  }



  listenKannada() {}
}
