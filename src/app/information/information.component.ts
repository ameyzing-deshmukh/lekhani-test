import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  public title = 'रचना लेखनी';

  public app_info_greetings ='नमस्कार बंधुवर,';
  public app_info_p1 = 'प्रस्तुत ऍप राष्ट्रीय स्वयंसेवक संघ के घोष दल में वादन की जाने वाली रचनाओं के लेखन अभ्यास हेतु है।';
  public app_info_p2 = 'लेखन करते समय निम्नलिखित बातों का ध्यान अवश्य रखे-';
  public app_info_p3 = 'अ- सर्वप्रथम ताल चुने';
  public app_info_p4 = 'ब- रचना लेखन मात्राश: होगा अत: उस मात्रा में आने वाले स्वरों की संख्या चुनकर फिर टंकन प्रारम्भ करे';
  
  constructor() { }

  ngOnInit(): void {
  }

}
