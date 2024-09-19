import Image from "next/image";
import Marquee from "react-fast-marquee"

const CoolMarquee = () => {
  return (
    <Marquee pauseOnHover gradient gradientColor="rgb(18, 18, 18)" className="h-[10rem]">
      <div className="flex justify-center align-middle gap-28">
        <div className="w-fit">
          <Image
            src="/images/brands/Zabbix.svg"
            alt="teste"
            width={250}
            height={30} />
        </div>
        <div className="w-fit">
          <Image
            src="/images/brands/office365.svg"
            alt="teste"
            width={250}
            height={30} />
        </div>
        <div className="w-fit">
          <Image
            src="/images/brands/google.svg"
            alt="teste"
            width={250}
            height={30} />
        </div>
        <div className="w-fit">
          <Image
            src="/images/brands/jira.svg"
            alt="teste"
            width={250}
            height={30} />
        </div>
        <div className="w-fit">
          <Image
            src="/images/brands/docker.svg"
            alt="teste"
            width={250}
            height={30} />
        </div>
        <div className="w-fit">
          <Image
            src="/images/brands/asana.svg"
            alt="teste"
            width={250}
            height={30} />
        </div>
      </div>
    </Marquee>
  );
}

export default CoolMarquee;