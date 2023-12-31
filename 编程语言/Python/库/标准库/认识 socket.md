##### 套接字
- 想象你正在和你的朋友通过两个电话进行通话。每个电话都是一个套接字。一个套接字就像是一条虚拟的电话线，可以让你的计算机与其他计算机进行通信。
- 现在，你和你的朋友可以通过这两个电话进行交流，你可以发送消息（数据）通过你的电话线，然后你的朋友可以接收到这些消息并回复你。这就好像是计算机之间建立了一个虚拟的通信渠道。
- 套接字在计算机网络编程中起着非常重要的作用，它允许不同的计算机之间通过网络进行通信，发送和接收数据，就像人们在电话中进行交流一样。套接字提供了一种标准的接口，使得应用程序能够使用网络进行数据传输，从而实现了网络通信。
- 总之，套接字就像是计算机之间的虚拟电话线，允许它们在网络上进行通信和数据交换。这种通信方式是计算机网络中的基础，用于构建各种网络应用程序，如网页浏览、文件传输、实时通信等。
##### 套接字的组成
- 在网络编程中，套接字（Socket）是通过 IP 地址和端口号的组合来标识网络中的一个节点，用于实现不同计算机之间的通信。套接字包含了通信的基本信息，包括通信的地址、协议和端口等。
- 具体来说，一个套接字可以由以下几部分组成：
	1. **IP 地址**：标识网络中的主机，IPv4 或 IPv6 地址。
	1. **端口号**：标识主机上的进程或服务，用于区分不同的应用程序。
	2. **协议**：定义了数据通信的规则和格式，如 TCP、UDP 等。
- 通过将 IP 地址和端口号组合在一起，可以唯一地标识网络中的一个节点，使不同计算机之间能够进行数据交换和通信。套接字的使用允许程序在不同主机之间建立连接、发送数据和接收数据，从而实现网络通信。
##### 套接字的类型
- 套接字（Socket）的具体形式可以类比为现实生活中的插座和插头。插座和插头是用来连接电器设备并传输电能的物理接口，而套接字则是用来连接计算机之间进行数据传输的虚拟接口。
- 在计算机网络中，套接字有两种主要类型：流套接字（Stream Socket）和数据报套接字（Datagram Socket）。
	- **流套接字（Stream Socket）**：类似于电话通话中的持续对话，数据通过一个连接传输，保持顺序和可靠性。流套接字提供面向连接的通信，数据按顺序传输，确保数据的可靠性和完整性。这种套接字通常使用TCP（传输控制协议）协议实现，常用于需要可靠传输的应用，如网页浏览、文件传输等。
	- **数据报套接字（Datagram Socket）**：类似于邮寄信件，每个数据报都是独立的，可能会以不同的顺序到达。数据报套接字提供无连接的通信，数据以独立的数据报形式传输，不保证顺序和可靠性。这种套接字通常使用UDP（用户数据报协议）协议实现，常用于需要快速传输的应用，如实时通信、游戏等。
	- 套接字的具体形式取决于使用的协议和网络类型。它们可以用来在不同的计算机之间或同一台计算机的不同进程之间进行通信。套接字提供了一种标准的接口，使得应用程序能够使用网络进行数据传输，实现了计算机之间的通信。
##### 套接字的连接过程
- 客户机套接字地址：定义了一个唯一的客户进程
- 服务器套接字地址：定义了一个唯一的服务器进程
- **服务器端准备**：服务器端首先创建一个套接字，并绑定到一个特定的 IP 地址和端口上，以便监听客户端的连接请求。
- **客户端请求连接**：客户端创建一个套接字，并向服务器端发送连接请求。这个请求包含了目标服务器的 IP 地址和端口号。
- **服务器端接受连接**：一旦服务器端接收到客户端的连接请求，它会通过 accept() 方法接受连接，并返回一个新的套接字，用于与该客户端进行通信。
- **数据传输**：一旦连接建立，客户端和服务器端可以通过各自的套接字进行数据的发送和接收。
- **连接终止**：当通信完成或需要关闭连接时，客户端或服务器端可以调用 close() 方法关闭套接字，终止连接。

