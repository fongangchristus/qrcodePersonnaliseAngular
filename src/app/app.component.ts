import { Component, ViewChild, ElementRef, OnInit } from "@angular/core";
import * as QRCodeStyling from "qr-code-styling";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  @ViewChild("canvas", { static: true }) canvas: ElementRef;

  ngOnInit(): void {
    console.log(QRCodeStyling);
    if (!QRCodeStyling) {
      return;
    }
    const qrCode = new QRCodeStyling({
      width: 232,
      height: 232,
      margin: 14,
      data: "https://www.facebook.com/",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
      dotsOptions: {
        color: "#4267b2",
        type: "rounded"
      },
      backgroundOptions: {
        color: "#e9ebee"
      },
      imageOptions: {
        crossOrigin: "anonymous",
        margin: 14
      }
    });

    qrCode.append(this.canvas.nativeElement);
  }
}
