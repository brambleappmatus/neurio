export interface AudioTrack {
  id: string;
  title: string;
  subtitle: string;
  url: string;
}

export const audioTracks: AudioTrack[] = [
  {
    id: 'laura-multilang',
    title: 'Multilingual AI Voice Demo',
    subtitle: 'Laura - Professional Voiceover',
    url: '/Laura_MultiLang.wav'
  },
  {
    id: 'ivr-demo',
    title: 'IVR System Demo',
    subtitle: 'Interactive Voice Response',
    url: '/audio/ivr-demo.mp3'
  },
  {
    id: 'branding-demo',
    title: 'Audio Branding Demo',
    subtitle: 'Sonic Identity Sample',
    url: '/audio/branding-demo.mp3'
  }
];