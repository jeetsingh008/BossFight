declare module "aos" {
    export interface AosOptions {
      offset?: number;
      duration?: number;
      easing?: string;
      delay?: number;
      once?: boolean;
      mirror?: boolean;
      anchorPlacement?: string;
    }
  
    const AOS: {
      init(options?: AosOptions): void;
      refresh(): void;
    };
  
    export default AOS;
  }
  