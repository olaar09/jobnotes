import {Skeleton} from 'antd';
import React from 'react';
import {List, Avatar, Icon, Button} from 'antd';

const listData: any = [];
for (let i = 0; i < 6; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

const IconText = ({type, text}: {type: string; text: string}) => (
  <span>
    <Icon type={type} style={{marginRight: 8}} />
    {text}
  </span>
);

interface JobItem {
  title: string;
  description: string;
  avatar: string;
  content: string;
  href: string;
  loading: boolean;
  default: any;
}

interface JobViewProps {}

export default class JobView extends React.Component<JobViewProps> {
  render() {
    const loadMore = (
      <div
        style={{
          textAlign: 'center',
          marginTop: 12,
          height: 32,
          lineHeight: '32px',
        }}
      >
        <Button onClick={() => {}}>loading more</Button>
      </div>
    );

    const header = (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <h3
            style={{
              color: '#414141',
            }}
          >
            {' '}
            Job applications (28)
          </h3>
        </div>
      </div>
    );
    return (
      <React.Fragment>
        <List
          style={{
            margin: 50,
          }}
          header={header}
          className="demo-loadmore-list"
          loading={false}
          itemLayout="horizontal"
          loadMore={loadMore}
          dataSource={listData}
          renderItem={(item: JobItem) => (
            <List.Item actions={[<a>edit</a>, <a>more</a>]}>
              <Skeleton avatar title={false} loading={item.loading} active>
                <List.Item.Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                  title={<a href="https://ant.design">{item.title}</a>}
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
                <div>content</div>
              </Skeleton>
            </List.Item>
          )}
        />
      </React.Fragment>
    );
  }
}
