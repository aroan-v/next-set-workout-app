import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardImageContainer,
  CardTitle,
} from '../ui/card'
import { Button } from '../ui/button'

export default function ArticleCard({ objContent = {} }) {
  const { src, alt, category, date, title, description, href } = objContent

  if (!title) {
    return
  }

  return (
    <Card className={''}>
      {/* Image Container */}
      {src && alt && <CardImageContainer src={src} alt={alt} />}

      <CardHeader className={'flex-1'}>
        {/* Category and Date */}
        <div className="text-card-foreground/40 flex justify-between text-xs">
          <span>{category}</span>
          <span>{date}</span>
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardAction>
        <Button variant={'outline'} size={'sm'}>
          Read More
        </Button>
      </CardAction>
    </Card>
  )
}
