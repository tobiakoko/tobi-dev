import { useRef, useEffect, useState } from 'react';
import Asana from "~/assets/logos/asana.png";
import AWS from "~/assets/logos/aws.png";
import Bootstrap from "~/assets/logos/bootstrap.png";
import Canva from "~/assets/logos/canva.png";
import Cassandra from "~/assets/logos/cassandra.png";
import Confluence from "~/assets/logos/confluence.png";
import CSS from "~/assets/logos/css.png";
import Cypress from "~/assets/logos/cypress.png";
import Django from "~/assets/logos/django.png";
import Docker from "~/assets/logos/docker.png";
import Express from "~/assets/logos/express.png";
import Figma from "~/assets/logos/figma.png";
import GitHub from "~/assets/logos/github.png";
import GoogleAnalytics from "~/assets/logos/google-analytics.png";
import GoogleCloud from "~/assets/logos/google-cloud.png";
import GoogleDocs from "~/assets/logos/google-docs.png";
import GoogleDrive from "~/assets/logos/google-drive.png";
import GoogleSlides from "~/assets/logos/google-slides.png";
import Graphql from "~/assets/logos/graphql.png";
import Hadoop from "~/assets/logos/hadoop.png";
import Java from "~/assets/logos/java.png";
import JavaScript from "~/assets/logos/javascript.png";
import Jest from "~/assets/logos/jest.png";
import Jira from "~/assets/logos/jira.png";
import jQuery from "~/assets/logos/jquery.png";
import Kafka from "~/assets/logos/kafka.png";
import Kubernetes from "~/assets/logos/kubernetes.png";
import MailChimp from "~/assets/logos/mailchimp.png";
import MicrosoftAzure from "~/assets/logos/microsoft-azure.png";
import MicrosoftProject from "~/assets/logos/microsoft-project.png";
import MicrosoftSQLServer from "~/assets/logos/microsoft-sql-server.png";
import MondayDotCom from "~/assets/logos/monday-com.png";
import MongoDB from "~/assets/logos/mongodb.png";
import MySQL from "~/assets/logos/mysql.png";
import NextJS from "~/assets/logos/next-js.png";
import NodeJS from "~/assets/logos/node-js.png";
import Playwright from "~/assets/logos/playwright.png";
import PostgreSQL from "~/assets/logos/postgresql.png";
import React1 from "~/assets/logos/react-1.png";
import React from "~/assets/logos/react.png";
import Redis from "~/assets/logos/redis.png";
import Redux from "~/assets/logos/redux.png";
import SalesForce from "~/assets/logos/salesforce.png";
import Spring from "~/assets/logos/spring.png";
import SQL from "~/assets/logos/sql.png";
import Tableau from "~/assets/logos/tableau.png";
import Trello from "~/assets/logos/trello.png";
import TypeScript from "~/assets/logos/typescript.png";
import VueJS from "~/assets/logos/vuejs.png";
import WordPress from "~/assets/logos/wordpress.png";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface LogosCarouselProps {
  heading?: string;
  logos?: Logo[];
  className?: string;
  speed?: number; // pixels per second
}

const LogosCarousel = ({
  heading = "Trusted by these companies",
  logos = [
    {
      id: "Amazon-Web-Services",
      description: "Amazon Web Services",
      image: AWS,
      className: "size-12 md:max-lg:size-8",
    },
    {
      id: "Django",
      description: "Django",
      image: Django,
      className: "size-12 md:max-lg:size-8",
    },
    {
      id: "Docker",
      description: "Docker",
      image: Docker,
      className: "size-12 md:max-lg:size-8",
    },
    {
      id: "Express",
      description: "Express",
      image: Express,
      className: "size-12 md:max-lg:size-8",
    },
    {
      id: "JavaScript",
      description: "JavaScript",
      image: JavaScript,
      className: "size-12 md:max-lg:size-8",
    },
    {
      id: "Java",
      description: "Java",
      image: Java,
      className: "size-12 md:max-lg:size-8",
    },
    {
      id: "TypeScript",
      description: "TypeScript",
      image: TypeScript,
      className: "size-12 md:max-lg:size-8",
    },
    {
      id: "Spring",
      description: "Spring",
      image: Spring,
      className: "size-12 md:max-lg:size-8",
    },
    {
        id: "NextJS",
        description: "NextJS",
        image: NextJS,
        className: "size-12 md:max-lg:size-8",
    },
    {
        id: "NodeJS",
        description: "NodeJS",
        image: NodeJS,
        className: "size-12 md:max-lg:size-8",
    },
    {
        id: "Kubernetes",
        description: "Kubernetes",
        image: Kubernetes,
        className: "size-12 md:max-lg:size-8",
    },
    {
        id: "MySQL",
        description: "MySQL",
        image: MySQL,
        className: "size-12 md:max-lg:size-8",
    },
    {
        id: "React",
        description: "React",
        image: React,
        className: "size-12 md:max-lg:size-8",
    },
    {
        id: "jQuery",
        description: "jQuery",
        image: jQuery,
        className: "size-12 md:max-lg:size-8",
    },
    {
        id: "MongoDB",
        description: "MongoDB",
        image: MongoDB,
        className: "size-12 md:max-lg:size-8",
    },
    {
        id: "SQL",
        description: "SQL",
        image: SQL,
        className: "size-12 md:max-lg:size-8",
    },
    {
        id: "PostgreSQL",
        description: "PostgreSQL",
        image: PostgreSQL,
        className: "size-12 md:max-lg:size-8",
    },
    {
        id: "Redux",
        description: "Redux",
        image: Redux,
        className: "size-12 md:max-lg:size-8",
    },
    {
        id: "Redis",
        description: "Redis",
        image: Redis,
        className: "size-12 md:max-lg:size-8",
    },
    {
        id: "GraphQL",
        description: "GraphQL",
        image: Graphql,
        className: "size-12 md:max-lg:size-8",
    },
    {
        id: "Azure",
        description: "Microsoft Azure",
        image: MicrosoftAzure,
        className: "size-12 md:max-lg:size-8",
    },
  ],
  speed = 75,
}: LogosCarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  const extendedLogos = [...logos, ...logos];

  useEffect(() => {
    const calculateWidths = () => {
      if (carouselRef.current) {
        const containerWidth = carouselRef.current.offsetWidth;
        setContainerWidth(containerWidth);
        
        const itemWidth = containerWidth / 5;
        const totalContentWidth = itemWidth * logos.length;
        setContentWidth(totalContentWidth);
      }
    };

    calculateWidths();
    window.addEventListener('resize', calculateWidths);

    return () => {
      window.removeEventListener('resize', calculateWidths);
    };
  }, [logos.length]);

  useEffect(() => {
    let animationFrameId: number;
    let lastTimestamp: number;

    const animate = (timestamp: number) => {
      if (!lastTimestamp) {
        lastTimestamp = timestamp;
        animationFrameId = requestAnimationFrame(animate);
        return;
      }

      const deltaTime = timestamp - lastTimestamp;
      const pixelsToMove = (speed * deltaTime) / 1000;
      
      setScrollPosition(prevPosition => {
        
        if (prevPosition >= contentWidth) {
          return 0;
        }
        return prevPosition + pixelsToMove;
      });

      lastTimestamp = timestamp;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [speed, contentWidth]);

  const transformStyle = {
    transform: `translateX(-${scrollPosition}px)`,
    transition: scrollPosition === 0 ? 'none' : 'transform linear',
  };

  return (
    <section className="shadow-md hover:shadow-xl py-6 rounded-md">
        <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl">
          <div ref={carouselRef} className="w-full overflow-hidden">
            <div 
              className="flex" 
              style={transformStyle}
            >
              {extendedLogos.map((logo, index) => (
                <div
                  key={`${logo.id}-${index}`}
                  className="flex shrink-0 basis-1/3 justify-center sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                >
                  <div className="mx-10 flex shrink-0 items-center justify-center">
                    <div className="rounded-xl shadow-xl">
                      <img
                        src={logo.image}
                        alt={logo.description}
                        className={logo.className}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent"></div>
       
      </div>
    </section>
  );
};

export default LogosCarousel;